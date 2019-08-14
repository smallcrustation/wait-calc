'use strict';

// global store
const STORE = {
  mealCount: 0.00,
  tipTotal: 0.00,
  averageTipPerMeal: STORE.tipTotal / STORE.mealCount
};

// helpers


// listeners
function handleSubmitMeal(){
  $('main').on('submit', '#meal-detail-form',(e) =>{
    e.preventDefault();
    console.log('submitd');
  });
}

// all listeners

// run app
function bindEventListeners(){
  console.log('here');
  handleSubmitMeal();
}

$(bindEventListeners);