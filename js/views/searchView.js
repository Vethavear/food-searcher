import {
  elements
} from './base';
import { state } from '../index';
import * as dailyDataView from './dailyDataView';
import * as foodListView from './foodListView';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
  elements.searchInput.value = '';
  elements.resultsDiv.innerHTML = '';
  elements.resultsDiv.insertAdjacentHTML('beforeend', `
  <p>Name</p>
  <p>Protein / 100g</p>
  <p>Fats / 100g</p>
  <p>Carbohydrates / 100g</p>
  <p>Energy / 100g</p>
  <p>Portion [g]</p>
  <p>Add</p>
  <div class="separator"></div>`)
};

const renderFood = async (food, index) => {
  const markup = `
  <a href="#${food.code}" class="link">${food.product_name}</a>
  <p>${food.nutriments.proteins_100g}</p>
  <p>${food.nutriments.fat_100g}</p>
  <p>${food.nutriments.carbohydrates_100g}</p>
  <p>${food.nutriments.energy_100g}</p>
  <span class="row">
  <input class="basic-slide" name ="portion" id="portion-${index}" type="text" value="100">
</span>
  <button id="btn-${index}" class="btn">Add</button>
  <div class="separator"></div>
`;
  elements.resultsDiv.insertAdjacentHTML('beforeend', markup);
}
export const renderResults = foods => {
  foods.forEach((element, index) => {
    renderFood(element, index);
    
    const button = document.getElementById(`btn-${index}`);
    button.addEventListener('click', e => {
      const portion = document.getElementById(`portion-${index}`).value;

      // recalculate todays foods and nutritment
      state.DailyData.updateDailyNutritments(element, portion);
      //add selected food to list
      state.FoodList.addFood(element, portion);

      //update views
      dailyDataView.updateDailyData();
      foodListView.renderFood(element, index, portion);

    })
  })
};


