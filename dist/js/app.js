// UI Controller

const UICtrl = (function () {
  console.log('test1');
})();

const UICtrl2 = () => {
  console.log('test2');
};
UICtrl2();

// Item Controller
const ItemCtrl = (function () {

})();


// App Controller
const AppCtrl = (function () {

  return {
    init: function () {
      console.log('initalizing')
    }
  }


})();


AppCtrl.init();