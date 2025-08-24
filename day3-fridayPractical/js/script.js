
let cards = document.querySelector(".cards");


 const  blogApi = async ()=>{ await  fetch("https://test-api-v1-vert.vercel.app/v1/blogs",
    {
        method:"GET",
        headers:{"Content-Type": 'application/json' } ,
  
    }).then(res=> res.json()).then(res =>{
res.forEach(element =>
     {        
            cards.innerHTML+= `
             <div class="inner-container">

              <div class="card">

        <!-- Start of top  -->

        <div class="top">
        <div class="image">
            <img src=${element.authorImage }alt="user image" />
        </div>
            <p class="description">${element.description}</p>
        </div>
                <!-- End of top  -->

        <!-- Start of bottom  -->
         <div class="bottom">
            <div class="user">
                <div class="image">
                    <img src=${element.image}alt=""/>
                </div>
                <p class="name">
                    ${element.author}
                </p>
            </div>
                <p class="brief">${element.title}</p>

          
         </div>
        <!-- End of bottom  -->

  <div class="more-Info">
                <a href="#">Read more</a>
                <div class="views">
                    <img src="./images/eye.svg" alt="view" />
                    ${element.viewers}
                </div>
            </div>

    </div>
    </div>
            
            `;
            
        }) ;

    })
}
 



blogApi();



