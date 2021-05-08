// API URL 





function getSearch(){
    const foodName = document.getElementById('searchFood').value;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+foodName;
    
    fetch(url)
    .then(res => res.json())
    .then(data => searchOutput(data.meals));
    
    

}

function searchOutput(result){
   
    document.getElementById('resultContainer').innerHTML='';
    
    for (let i = 0; i < 12; i++) {

        const foodName = result[i].strMeal;
        const  foodImage = result[i].strMealThumb;

        const resultContainer = document.getElementById('resultContainer');

        const food = document.createElement('div');
        food.className = 'food shadow';
        food.innerHTML = `
            <a href="">
                <div class="food-image">
                    <img src="${foodImage}" alt="" class="img-fluid">
                </div>
                <div class="food-name">
                    <h4 class="text-center">'${foodName}'</h4>
                </div>
    </a>
        `;



        resultContainer.appendChild(food);

        console.log(foodImage);
        
        
        
    }
}