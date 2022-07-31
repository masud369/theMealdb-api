

document.getElementById("search").addEventListener("click",()=>{
    url();
});



const url = ()=>{
    const searchInput = document.getElementById("input-search").value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        const resMeal = res.meals;
        resMeal.forEach(element => {
            console.log(element.strIngredient6);
            const ppp = element;
            const newDiv = document.createElement("div");
            newDiv.classList.add("col-md-3");
            newDiv.classList.add("meal-item");
            newDiv.innerHTML = `<div id="col-container"> 
            <img src="${element.strMealThumb}">     
            <h1 id="title">${element.strIngredient6}</h1>
            
            <button id="details">Details</button>

             </div>`;
            const rowContainer = document.getElementById("row");
            rowContainer.appendChild(newDiv);

           
                const meuParent = document.querySelectorAll("#details");
                meuParent.forEach((elll)=>{
                    elll.addEventListener("click",()=>{
                        elll.innerText = `complimentry : ${element.strIngredient1}
                             ${ppp.strIngredient2}
                             ${ppp.strIngredient3}
                             ${ppp.strIngredient4}
                             ${ppp.strIngredient5}    
                            `;
                    });
                })
                // meuParent.forEach(ell => {
                //     ell.addEventListener("click",(e)=>{
                        
                //     const inputPara = document.querySelectorAll("#complymentory");
                //     inputPara.forEach((elll)=>{
                //         elll.innerText = `complimentry : ${element.strIngredient1}
                //     ${element.strIngredient2}
                //     ${element.strIngredient3}
                //     ${element.strIngredient4}
                //     ${element.strIngredient5}    
                //     `; 

                //     });
                    
                //     });
                // });

                // this.innerHTML = `<p>complimentry : ${element.strIngredient1}
                // ${element.strIngredient2}
                // ${element.strIngredient3}
                // ${element.strIngredient4}
                // ${element.strIngredient5}    
                // </p>`;
            


        });
        
         

        // console.log(res.meals[0]);
        // const nain = document.getElementById("row");
        // const mealsData = res.meals; 
        // mealsData.forEach(el => {
        //     console.log(el.strCategory);

        //     const newElement  = document.createElement("div");
        //      newElement.classList.add("col-md-3");  
        //      newElement.classList.add("bg-primary");  
        //      newElement.classList.add("m-4");  
        //      newElement.classList.add("meal-item");  
        //      newElement.addEventListener("click",function(){
        //         this.innerHTML = `<p></p>`;
        //      });

        //     newElement.innerHTML = ` 
        //     <div id="col-container"> 
        //         <h1 id="title">${el.strCategory}</h1>
        //     </div>`;
        //     nain.appendChild(newElement);



        // });
    })
}

