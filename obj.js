    let obj: any = {};
const valuesNotNull = [];
    for (const prop in obj) {
      if (obj[prop]) {
        valuesNotNull.push(obj[prop]);
      }
    }
        console.log(valuesNotNull.length);
