//array
//let number=[1,2,"three",true];

//let names=new Array("john","james");

//console.log(number[2]);
//console.log(names.length);


//let result=number.filter(result=>number[1]);
//console.log(result);


//let number=[1,2,3,4,5];
//let r=number.splice(1,3);
//console.log(r)

//object
let details={
    name:"vincent",
    totalmark:"100",
    //nested obj
    subject:{
        physics:"88",
        english:"66"
    
    },
    avg:function(){
        let sum=this.subject.physics+this.subject.english;
        return sum;
    }
    
}
console.log(details.totalmark)
console.log(details["name"]);
console.log(details.subject.physics);
console.log(details.subject["english"]);
console.log(details.avg());

const person=["vincent",77,"softwaredeveloper"];
const[name,age,desigination]=person;
console.log(name+" "+age+" "+desigination);



