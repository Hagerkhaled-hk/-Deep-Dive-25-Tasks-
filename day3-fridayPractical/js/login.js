let notify=document.querySelector("#notify");
let form=document.querySelector("form");
let name=document.querySelector("#name");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let confirm_password=document.querySelector("#confrim-password");
let register=document.querySelector("#register");


/* Api function
 */
 async function loginUser({username, password, email} ){
  

    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/login", {
        method: "POST",
        body: JSON.stringify({username, password, email})
    })
    return res.json();
}

/* Function to check if inputs empty
 */
function isEmpty(input)
{
    console.log(input , input.value.trim()=="");
    
    return input.value.trim()=="";
}


/* Function to check if values have a valid length 
 */
function isValidLength(input,len)
{
    return input.value.length >= len ;
}


/* Function to validate values
 */
function isValidate()
{
    notify.innerHTML='';
   if(isEmpty(name)|| isEmpty(email) || isEmpty(password)||isEmpty(confirm_password))
    {notify.innerHTML=`<p style="color:red; font-size:18px;">Please complete the  registration form</p>`;
  return false;}

     if(!(isValidLength(name,2)))
        {
        notify.innerHTML=`<p style="color:red; font-size:18px;"> Name must be at least 2 characters long</p>`;
        return false;
    }
    
    if(!isValidLength(email,10))
    {
           notify.innerHTML=`<p style="color:red; font-size:18px;"> Email must be at least 10 characters long</p>`;
        return false;
    }
    
    if(!isValidLength(password,8))
    {
         notify.innerHTML=`<p style="color:red; font-size:18px;"> Password must be at least 8 characters long</p>`;
        return false;
    }


  if(password.value!==confirm_password.value)
    {notify.innerHTML=`
        <p style="color:red; font-size:18px;">Password and confirm password don't match</p>`;}
}






/* Start of Form  listener
 */

form.addEventListener("submit",async(e)=>{
e.preventDefault();
 
if(!isValidate())
{

try{
/*     Waiting for Api 
 */
  await loginUser({name,password,email},e);

  //If Api calling successed

notify.innerHTML="<p style='color:green'>Registration is successful </p>"
setTimeout(() => {
    e.target.submit(); 

}, 500);
     
 
} 
catch
{  //If Api calling failed

          notify.innerHTML="<p style='color:red' font-size:18px>We're having trouble connecting to our servers. Please check your network connection. </p>";

}
}
});




/* End of Form  listener
 */
