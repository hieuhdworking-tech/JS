//Object contructor

function Person(name){
    this.name = name;
    this.sayHi = function (){
        console.log("Hi");
    };
}

//ES6

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log('Hi, tôi là ${this.name}');
    }
}

//Class

class Animal 

const p1 = new Person("A", 20);
//Object literal

const user ={
    name: "A",
    age: 20
};

//Automation Order Code
(() => {
    'use strict';

    kintone.events.on('app.record.create.show', function(event){
        const appID = kintone.app.getId();
        const query = 'order by orderCode desc limit 1';
        const params = {
            app: appID,
            query: query,
            fields: ['orderCode']
        };
    return kintone.api(
        kintone.api.url('/k/v1/records.json', true),
        'GET',
        params
    )
    .then(function (resp){
        let nextNumber = 1;
        if (resp.records.length >0){
            const lastCode = resp.records[0].orderCode.value;
            const num = parseInt(lastCode.replace('MDH', ''),10);
            nextNumber = num +1;
        } 
        const newCode = 'MDH'  + String(nextNumber).padStart(3, '0');
        event.record.orderCode.value = newCode;
        return event;
    });
    });

})();

//Check in inventory

(() => {
  'use strict';

  kintone.events.on(
    ['app.record.create.submit', 'app.record.edit.submit'],
    async function (event) {

      const rows = event.record.productList.value;
      if (!rows || rows.length === 0) {
        return event;
      }

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i].value;

        if (!row) continue;
        if (!row.Lookup || !row.Lookup.value) continue;
        if (!row.quantity || row.quantity.value === undefined) continue;

        const productCode = row.Lookup.value;
        const orderQty = Number(row.quantity.value) || 0;
        if (orderQty <= 0) continue;

        const resp = await kintone.api(
          kintone.api.url('/k/v1/records.json', true),
          'GET',
          {
            app: 939,
            query: `product_code = "${productCode}"`,
          }
        );

        if (resp.records.length === 0) {
          event.error = `Product ${productCode} was not found in the inventory.`;
          return event;
        }
        const stockRecord = resp.records[0];
        console.log(stockRecord);
        const recordId = stockRecord.$id.value;
        const currentStock = Number(stockRecord.inventory.value) || 0;


        if (currentStock < orderQty) {
          event.error = `Product ${productCode} does not have sufficient stock.`;
          return event;
        }

        const newStock = currentStock - orderQty;

        await kintone.api(
          kintone.api.url('/k/v1/record.json', true),
          'PUT',
          {
            app: 939,
            id: recordId,
            record: {
              inventory: { value: newStock }
            }
          }
        );
      }
      return event;
    }
  );
})();

(() => {
  'use strict';

  let originalQtyMap = {};

  kintone.events.on('app.record.edit.show', (event) => {
    originalQtyMap = {};

    event.record.productList.value.forEach(row => {
      const r = row.value;
      if (r.Lookup && r.Lookup.value) {
        originalQtyMap[r.Lookup.value] =
          Number(r.quantity.value) || 0;
      }
    });

    return event;
  });

    kintone.events.on(
    ['app.record.create.submit', 'app.record.edit.submit'],
    async (event) => {

      const rows = event.record.productList.value;
      if (!rows || rows.length === 0) return event;

      const isEdit = event.type === 'app.record.edit.submit';

      for (const rowObj of rows) {
        const row = rowObj.value;
        if (!row?.Lookup?.value) continue;

        const productCode = row.Lookup.value;
        const newQty = Number(row.quantity.value) || 0;

        const oldQty = isEdit
          ? (originalQtyMap[productCode] || 0)
          : 0;

        const delta = newQty - oldQty;
        if (delta === 0) continue;

        // GET kho
        const resp = await kintone.api(
          kintone.api.url('/k/v1/records.json', true),
          'GET',
          {
            app: 939,
            query: `product_code = "${productCode}"`
          }
        );

        if (resp.records.length === 0) {
          event.error = `Product ${productCode} not found`;
          return event;
        }

        const stockRecord = resp.records[0];
        const currentStock =
          Number(stockRecord.inventory.value) || 0;

        if (currentStock < delta) {
          event.error = `Insufficient stock for ${productCode}`;
          return event;
        }

        const newStock = currentStock - delta;

        await kintone.api(
          kintone.api.url('/k/v1/record.json', true),
          'PUT',
          {
            app: 939,
            id: stockRecord.$id.value,
            record: {
              inventory: { value: newStock }
            }
          }
        );
      }

      return event;
    }
  );
})();

