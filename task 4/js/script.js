


/* ============= String Methods==============
 */

console.log("=====================String Methods==================");

 let fullName = "  Mohamed Yasser  ";
console.log("numbers of character in fullName :" ,fullName.length);


let newFullName = fullName.trim();
console.log(" numbers of character in newFullName : ",newFullName);


console.log("upperCase : ",fullName.toUpperCase(),"lowerCase :",fullName.toLowerCase() );


let extract = fullName.trim().split(" ");
console.log("Extract only the first name : ", extract[0])  ;


console.log( "Check if the fullName includes mohamed :" ,fullName.includes("mohamed"));

 

/* ============= Array Methods==============
 */
 console.log("=====================Array Methods==================");

let fruits=["apple", "banana", "mango"];

fruits.push("orange");
fruits.unshift("kiwi");



fruits.shift();
fruits.pop();

console.log("Find and print the index of mango :",
fruits.indexOf("mango"));




console.log(" convert each fruit name in the array to uppercase. : ", 
      fruits.map((fruit)=>{
     return fruit.toUpperCase()
    }) 
  );



console.log(
"all fruits that start with B or b",
    fruits.filter((fruit)=>{
    return  fruit.toUpperCase().startsWith("B");
    })
);


fruits.forEach((fruit,index) => {
    console.log(`fruit ${index} is ${fruit}`);
    
});



/* ============= Math==============
 */
 console.log("=====================Math==================");





console.log( " random number : ",Math.round(Math.random()*10));


console.log("round :",Math.round(5.1)," ",Math.round(5.6));
console.log("trunc :",Math.trunc(5.1)," ",Math.trunc(5.6));
console.log("floor :",Math.floor(5.1)," ",Math.floor(5.6));
console.log("ceil :",Math.ceil(5.1)," ",Math.ceil(5.6));



console.log(" square root :",Math.sqrt(64));

console.log(" maximum number :" , Math.max(3, 8, 20, 1));
console.log(" minimum  number :" , Math.min(3, 8, 20, 1));



/* ============= Ternary Operator ==============
 */
 console.log("=====================Ternary Operator==================");



let age=20;

console.log("Ternary Operator  ",
    age>=18 ? "Adult" :"Minor" 
);




/* ============= Object ==============
 */

 console.log("=====================Object==================");


let person ={name:"hager",age2:21,address:"zag",dispalyInfo(){
    console.log(`dispalyInfo : name ${this.name} age ${this.age} address ${this.address}` );
    
},
contact:{phone:"0111145786",email:"h@gmail.com",displayContactInfo(){
    console.log(`displayContactInfo : phone ${this.phone} email ${this.email}`);
    

}}}


 "displayInfo",person.dispalyInfo();
 "displayContactInfo",person.contact.displayContactInfo();

 person.address="ZAGZIG";

 console.log("Update the address :", person.address);
 

const {name , age2 ,contact:{phone}}=person;

console.log(`destructuring to extract name , age  and phone : ${name}  ${age2}  ${phone} ` );


/* ============= Spread / Rest Operators ==============
 */

 console.log("=====================SpreadOperator==================");


let arr1= [1, 2, 3] , arr2 = [4, 5, 6] ;

console.log("merge both arrays :" ,[...arr1,...arr2]);

function SUM(...numbers)
{
   return  numbers.reduce((a,b)=>a+b,0);
}

console.log("returns their sum :", SUM(...arr1));





/* ============= template literal ==============
 */

 console.log("=====================template literal==================");

let Name="hager" , Age=21;
console.log(`Hello ${name }, you are ${ age } years old.`);
