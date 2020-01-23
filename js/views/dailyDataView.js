import {
    elements
  } from './base';
import {state} from '../index'

 export const updateDailyData = () =>{

    elements.todayData.energy.innerHTML = `Energy: ${state.DailyData.energy}`;
    elements.todayData.proteins.innerHTML = `Proteins: ${state.DailyData.proteins}`;
    elements.todayData.carbohydrates.innerHTML = `Carbs: ${state.DailyData.carbohydrates}`;
    elements.todayData.fat.innerHTML = `Fat: ${state.DailyData.fat}`;

 } 