//let number= 7397511507
//let value=/^[1-9]\{10}d/;
//if (value.test(number.toString())){
 //   console.log("correct")
 //}
//else{
  //  console.log("not correct")
//}

//let  text="Hai hellow how are you";
//let  match=/\bh\w+\b/;

//console.log(match,match ? text : 0)
//console.log(text.length);

const text ="hellow! how are you";
const words=text.match(/\b\w+\b/gi);
console.log(words);
