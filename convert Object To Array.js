
let names = {
    "reza": 3,
    "hosein": 2,
    "mehdi": 5,
    "hosein": 3,
    "ali":2,
  };
  
  function count() {
    let result = [];
    for (let key in names) {
      let value = names[key];
      for (let i = 0; i < value; i++) {
        result.push(key);
      }
    }
  
    return result;
  }
  console.log(count());//[
//     'reza',   'reza',
//     'reza',   'hosein',
//     'hosein', 'hosein',
//     'mehdi',  'mehdi',
//     'mehdi',  'mehdi',
//     'mehdi',  'ali',
//     'ali'
//   ]
  
  