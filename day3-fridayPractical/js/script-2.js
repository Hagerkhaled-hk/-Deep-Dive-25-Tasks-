
let articles= document.querySelector(".articles-container");


async function getArticles() {
    const res = await fetch("https://test-api-v1-vert.vercel.app/v1/articles", {
        method: "GET"
    }).then(res=>res.json()).then(res =>{
console.log(res);


res.forEach(element => {
     articles.innerHTML+=`

       <div class="inner-container">
             <div class="j">
            <img  class="main-image" src=${element.image} alt=""/>
            <p>${element.title}</p>
            <p>${element.description}</p>
            <span><img class="authorImage" src=${element.authorImage} alt=""></span>
            <p class="photo_text">${element.author}</p>
            <p class="text_price">
                <span class="old">$100</span>
                <span class="current">${element.price}</span>
            </p>
        </div>
         </div>
            `;
});
       

    })


}


getArticles();

