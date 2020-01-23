
export default class FoodList {


    constructor() {
        this.foods = [];
    }

    addFood(food, portion) {

       this.foods.push(food);
       this.foods.push(portion);

    }
    removeFood(food) {
        // 2 since next field in array is a portion
        this.foods.splice(this.foods.indexOf(food), 2);
    }

    check(){
        this.foods.forEach(food =>{
            console.log(food);
        })
    }

}