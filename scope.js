//function scope
//This scope means that the variables are only accessibile
//in the function in which they are declared.

//function say(){
  //  console.log("Hai Global Scope")
    //console.log("within the func "+name);
//}
//say()
//console.log("outside the func"+name);

//function Voting(age){
  //  if(age>=18){
    //const iscloudy=true
//var israining=true
//console.log("eligible")
//console.log(iscloudy);

//}
//console.log(israining);

//}
//Voting(18)
//local scope(same as function or block scope depending on context)
//callback function

function Text(){
    console.log("message");
}
Text();

function send(){
    console.log("message sended");
    setInterval(callback,1000);
    
}
send(text);

let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count <5){
        Interval();
    }
}
Interval();



