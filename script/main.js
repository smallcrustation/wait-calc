const STORE = {
  mealCount: 0,
  tipTotal: 0.00,
  subtotal: 0,
  averageTipPerMeal: 0,
  totalMealPrices: 0,
};

// helpers


// listeners
function handleSubmitMeal(){
  $('main').on('submit', '#meal-detail-form',(e) =>{
    e.preventDefault();
    
    let {price, tax, tip} = e.currentTarget;
    price = parseInt(price.value);
    tax = parseFloat(tax.value) / 100;
    tip = (parseFloat(tip.value) / 100) * price;
    const subtotal = (price * tax) + price;
    // update store
    STORE.mealCount++;
    STORE.tipTotal += tip;
    STORE.averageTipPerMeal = (STORE.averageTipPerMeal + tip) / STORE.mealCount;

    updateValues(subtotal, tip);
  });
}

function clickReset(){
  $('main').on('click', '.js-reset',() => handleReset());
}

// handle display
function updateValues(subtotal=0, tip=0){
  $('#js-subtotal span').text(subtotal.toFixed(2));
  $('#js-tip span').text(tip.toFixed(2));
  $('#js-tip-total span').text(STORE.tipTotal.toFixed(2));
  $('#js-meal-count span').text(STORE.mealCount);
  $('#js-avg-tip span').text(STORE.averageTipPerMeal.toFixed(2));
}

function handleReset(){
  Object.keys(STORE).forEach(key => STORE[key] = 0);
  updateValues();
}


// collect listeners 
function bindEventListeners(){
  handleSubmitMeal();
  clickReset();
}

// run app
$(bindEventListeners);