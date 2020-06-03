import {
    elements
  } from './base';
  import { state } from '../index';
  import * as dailyDataView from './dailyDataView';
  export const prepareList = () => {
    elements.mealsDiv.innerHTML = '';
    elements.mealsDiv.insertAdjacentHTML('beforeend', `
    <p>Name</p>
    <p>Protein / 100g</p>
    <p>Fats / 100g</p>
    <p>Carbohydrates / 100g</p>
    <p>Energy / 100g</p>
    <p>Portion [g]</p>
    <p>Remove</p>
    <div class="separator"></div>`)
  };
  //   <input type="text" name="portion" id="portion-${index}" value="${portion}">
  export const renderFood = async (food, index, portion) => {
    const markup = `
    <a href="#${food.code}" class="link">${food.product_name}</a>
    <p>${food.nutriments.proteins_100g}</p>
    <p>${food.nutriments.fat_100g}</p>
    <p>${food.nutriments.carbohydrates_100g}</p>
    <p>${food.nutriments.energy_100g}</p>
    <span class="row">
    <input class="basic-slide" name ="portion" id="portion-${index}" type="text" value="${portion}">
  </span>
  
    <button id="btn-${index}" class="btn"><i class="fas fa-times"></i></button>
    <div class="separator"></div>
  `;
    elements.mealsDiv.insertAdjacentHTML('beforeend', markup);

    //deleting

    const button = document.getElementById(`btn-${index}`);
    button.addEventListener('click', e => {

      // recalculate todays foods and nutritment
      state.DailyData.updateDailyNutritmentsDelete(food, portion);
      //remove food from list
      console.log('witam');

      state.FoodList.check();
      state.FoodList.removeFood(food);
      console.log('witam usuniete');
    state.FoodList.check();
          //update views
      dailyDataView.updateDailyData();
      prepareList();
      renderFoods(state.FoodList.foods);
    })
  }

  export const renderFoods = async (foods) =>{

    
    for (let index = 0; index < foods.length; index++) {
        const food = foods[index];
        renderFood(food, index, foods[index+1] );
        index++;
    }
  }
