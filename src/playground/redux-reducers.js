import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 1} = {})  => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure function
// 2. Never change state or actions

let a = 10;
const add = (b) => {
    return a + b;
}

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return {
                count: state.count + action.incrementBy
            };
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            };
        }
        case 'RESET': {
            return {
                count: 0
            };
        }
        case 'SET': {
            return {
                count: action.count
            };
        }
        default: {
            return state;
        }
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe((result) => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }));

// INCREMENT
store.dispatch(incrementCount());

// RESET
store.dispatch(resetCount());

store.dispatch(decrementCount({ incrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
