let names = [
  "mehdi",
  "reza",
  "hosein",
  "mehdi",
  "hosein",
  "reza",
  "mehdi",
  "mehdi",
  "ali",
  "ali",
  "hosein",
  "mehdi",
  "reza",
  "hosein",
  "mehdi",
  "hosein",
  "reza",
  "mehdi",
  "mehdi",
  "mehdi",
  "ali",
  "ali",
  "hosein",
];

function countNames() {
  let result = {};
  
  for (let name of names) {
    if (result[name] == undefined) {
      result[name] = 0;
    }

    result[name] = result[name] + 1;
  }

  return result;
}
console.log(countNames());
