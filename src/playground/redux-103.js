import { createStore } from 'redux';
/*
const add = ({a, b}, c) => {
    return a + b + c;
}

console.log(add({a: 1, b: 12}, 100))
*/

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
    // typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
    // typeof incrementBy === 'number' ? incrementBy : 1
});

const setCount = ({count = 1} = {})  => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            return {
                count: state.count + action.incrementBy
            };
        }
        case 'DECREMENT': {
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
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
            // const count = typeof action.count === 'number' ? action.count : 1;
            return {
                count: action.count
            };
        }
        default: {
            return state;
        }
    }
});

const unsubscribe = store.subscribe((result) => {
    console.log(store.getState());
})

// INCREMENT
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
*/
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// INCREMENT
store.dispatch(incrementCount());

// RESET
/*store.dispatch({
    type: 'RESET'
});*/
store.dispatch(resetCount());

// DECREMENT
/*store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
*/
store.dispatch(decrementCount({ incrementBy: 10 }));

/*
store.dispatch({
    type: 'SET',
    count: 101
});
*/
store.dispatch(setCount({ count: 101 }));
