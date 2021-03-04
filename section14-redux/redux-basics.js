const redux = require('redux');
const createStore = redux.createStore;

const initialsState = {
    counter:0
};

//Reducer: recieve states and actions.
const rootReducer = (state = initialsState,action)=>{
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter: state.counter+1
        }
    }
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter+action.value
        }
    }
    return state;
};
// Store: stores all the application state.
const store = createStore(rootReducer);
console.log(store.getState());

//Suscription
store.subscribe(()=>{
    console.log('[Suscription]', store.getState());
});

//Dispatching Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());

