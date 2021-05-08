// API URL 





function getSearch() {
    const foodName = document.getElementById('searchFood').value;
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodName;

    fetch(url)
        .then(res => res.json())
        .then(data => searchOutput(data.meals))
        .catch(error => console.log(error) );



}

function searchOutput(result) {

    document.getElementById('resultContainer').innerHTML = '';

    for (let i = 0; i < 12; i++) {

        const foodName = result[i].strMeal;
        const foodImage = result[i].strMealThumb;
        const foodId = result[i].idMeal;

        const resultContainer = document.getElementById('resultContainer');

        const food = document.createElement('div');
        food.className = 'food shadow';
        food.innerHTML = `
            <a href="#"  data-bs-toggle="modal" data-bs-target="#food_${foodId}" >
                <div class="food-image">
                    <img src="${foodImage}" alt="" class="img-fluid">
                </div>
                <div class="food-name">
                    <h4 class="text-center">${foodName}</h4>
                </div>
            </a>

            
            

    <!-- Modal -->
    <div
      class="modal fade"
      id="food_${foodId}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ingredients</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul id="ingredients">
              <li>${result[i].strIngredient1}  </li>
              <li>${result[i].strIngredient2}  </li>
              <li>${result[i].strIngredient3}  </li>
              <li>${result[i].strIngredient4}  </li>
              <li>${result[i].strIngredient5}  </li>
            </ul>
            <a target="_blank" class="d-inline-block btn btn-primary" href="${result[i].strYoutube}">Youtube Tutorial<a>
          </div>
        </div>
      </div>
    </div>
        




            `;

        resultContainer.appendChild(food);

        console.log(result[i]);



    }
}

