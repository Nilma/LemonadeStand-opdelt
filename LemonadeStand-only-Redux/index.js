// actions
const increase = () => ({ type: 'INCREASE'});
const buy = () => ({ type: 'BUY'});

const LEMONADE_PRICE = 5;
const LEMONADE_COST = 2;

const initialState = { stock: 50, revenue: 0 };

// reducers
const lemonadeReducer = (state = initialState, action) => {
    if (action.type === 'BUY') { 
        state.revenue += LEMONADE_PRICE;
        state.stock -= 1;
    }
    if (action.type === 'INCREASE') { 
        state.stock += 1;
        state.revenue -= LEMONADE_COST;
    }
    return state;
};

// store
const store = Redux.createStore(lemonadeReducer);

// update html
function render(){
   document.getElementById("stock").innerHTML = store.getState().stock;
   document.getElementById("revenue").innerHTML = store.getState().revenue;
}

// subscribe to changes, ie callback function render () is called when store is updated
store.subscribe(render);
