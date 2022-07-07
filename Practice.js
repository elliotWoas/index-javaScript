let arr = [];
for (let i = 1; i < 19; i++) {
  arr.push("i can");
}
console.log(arr);

const foods = [{ pizza: "1" }, { Escargot: "3" }, { FishAndChips: "2" }];

const addition = [].concat(foods);

//change only arr2
addition[1]. Paella = "5";
addition[2]. Paella = "6";
addition.push({ Currywurst: "2" });

console.log(foods);

console.log(addition);
