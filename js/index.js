import Search from './models/Search';
import * as searchView from './views/searchView';
import {
  elements
} from './views/base';
import DailyData from './models/DailyData';
import FoodList from './models/FoodList';

export const state = {};
state.DailyData = new DailyData('toady');
state.FoodList = new FoodList();
const controlSearch = async () => {

  // 1. get query from view
  const query = searchView.getInput();

  if (query) {
    // 2. New search object and add to state
    state.search = new Search(query);
    // 3. Prepare UI for results
    searchView.clearInput();
    // 4. Search for food
    await state.search.getResults();
    // 5. render results on UI
    searchView.renderResults(state.search.result);
  }
}
elements.openerButton.addEventListener('click', e =>{
  elements.leftDiv.classList.toggle('bringBack');
});
elements.closerButton.addEventListener('click', e =>{
  elements.leftDiv.classList.toggle('bringBack');
});
elements.submitButton.addEventListener('click', e => {
  e.preventDefault();
  controlSearch();
});



