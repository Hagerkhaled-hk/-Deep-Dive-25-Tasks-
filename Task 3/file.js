
/*1- Creates Varaibles
 */const studentName="hager khaled";
let studentAge=21;
var studentStatus=true;
let Grades=[90,80,70];

/* 2-Operators
 */
let totalGrades=90+80+70;
let avgGrades=totalGrades/3;


/* 3-if/else/else if
 */
if(avgGrades >= 90 )
{
    console.log("Excellent");
    
}
else if(avgGrades >= 75)
{
    console.log("Very Good");
    
}
else if(avgGrades >=60)
{
    console.log("Good");
    
}
else
{
    console.log("Failed");
    
}


/* 4-switch
 */
let subject = window.prompt("choose a subject 1-Math 2-Science 3-English");


switch(subject)
{
    case '1' : console.log("Math");
    break;
    case '2' : console.log("Science");
    break;
    case '3': console.log("English");
    break;
    default: console.log("none selected");
    
    
}
/* 5-loop-for 
 */
for (let index = 0; index < Grades.length; index++) {
console.log(`Grade ${index}`);
    
}


/* 6-Function
 */function CalcTotalGrades()
{
let sum=0;
    for (let index = 0; index < Grades.length; index++) {
        sum+=Grades[index];
    }

    return sum;
}

let CalcTotalGradesArrow=()=>{

    let sum=0;
    for (let index = 0; index < Grades.length; index++) {
        sum+=Grades[index];
    }

    return sum;

}
/* 7-While
 */
let num=10;

while(num<10)
{
    console.log("done");
    
}

/* 8-Do while
 */
let num2=10;

do
{
    console.log("done");

}
while(num2<10)


/*     9-Array
 */
let array = [1,2,3,4,5,6];


   let sum=0;
    for (let index = 0; index < Grades.length; index++) {
        sum+=array[index];
    }

    console.log(` Sum using for loop: ${sum} `);
     
  let sum2=0;
    let index=0;
    while(index < array.length)
    {
        sum2+=array[index];
        index++;

    }
        console.log(` Sum using while loop: ${sum2} `);




