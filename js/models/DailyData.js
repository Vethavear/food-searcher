
export default class DailyData {

  constructor() {

  }


   updateDailyNutritments(food, portion) {

    console.log(food.nutriments.proteins_100g);
    if(this.proteins){

      this.proteins = Math.round(this.proteins + food.nutriments.proteins_100g/100*portion);
      this.fat =  Math.round(this.fat + food.nutriments.fat_100g/100*portion);
      this.carbohydrates=  Math.round(this.carbohydrates + food.nutriments.carbohydrates_100g/100*portion);
      this.energy =  Math.round(this.energy + food.nutriments.energy_100g/100*portion);
      
    } else{
      this.proteins =   Math.round(food.nutriments.proteins_100g/100*portion);
      this.fat =  Math.round( food.nutriments.fat_100g/100*portion);
      this.carbohydrates=   Math.round(food.nutriments.carbohydrates_100g/100*portion);
      this.energy =  Math.round(food.nutriments.energy_100g/100*portion);
    }
    console.log(this.proteins);
  }

  updateDailyNutritmentsDelete(food, portion){

    this.proteins =  this.proteins - Math.round(food.nutriments.proteins_100g/100*portion);
    this.fat =  this.fat - Math.round(food.nutriments.fat_100g/100*portion);
    this.carbohydrates=  this.carbohydrates - Math.round(food.nutriments.carbohydrates_100g/100*portion);
    this.energy =  this.energy - Math.round(food.nutriments.energy_100g/100*portion);

    
  }

}