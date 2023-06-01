    let obj: any = {};
const valuesNotNull = [];
    for (const prop in obj) {
      if (obj[prop]) {
        valuesNotNull.push(obj[prop]);
      }
    }
        console.log(valuesNotNull.length);
const obj = {
  a: 'foo',
  b: null,
  c: undefined,
  d: 'bar'
};

const filteredValues = Object.entries(obj)
  .filter(([key, value]) => value != null)
  .map(([key, value]) => value);

console.log(filteredValues); // Output: ["foo", "bar"]
