let names = [
  "mehdi",
  "ali",
  "mehdi", 
  "ali",
  "hosein",
  "morteza",
  "salar",
  "ali",
  "ali",
  "mehdi", 
  "mehdi", 
  "mehdi", 
  "ali",
  "ali",
  "ali",
  "ali",
  "ali",
  "mohsen",
  "mehdi",
];

function count(serchName) {
  let counter = 0;
  for (let name of names) {
    if (serchName == name) {
      counter += 1;
    }
  }
  return counter;
}
console.log(count("mehdi"));//(6)
