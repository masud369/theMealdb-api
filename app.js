

document.getElementById("search").addEventListener("click",()=>{
    url();
});



const url = ()=>{
    const searchInput = document.getElementById("input-search").value;
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        const resMeal = res.meals;
        resMeal.forEach(element => {
            console.log(element.strMeal);
            const ppp = element;
            const newDiv = document.createElement("div");
            newDiv.classList.add("col-md-3");
            newDiv.classList.add("meal-item");
            newDiv.innerHTML = `<div id="col-container"> 
            <img src="${element.strMealThumb}">     
            <h1 id="title">${element.strMeal}</h1>
            
            <button id="details">Details</button>

             </div>`;
            const rowContainer = document.getElementById("row");
            rowContainer.appendChild(newDiv);

           
                const meuParent = document.querySelectorAll("#details");
                meuParent.forEach((elll)=>{
                    elll.addEventListener("click",()=>{
                        elll.innerText = `MealId : ${element.idMeal}
                           MealTitle : ${ppp.strMeal}  `;
                    });
                })
              


        });
        
         

    })
}

