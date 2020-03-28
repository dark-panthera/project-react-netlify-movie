import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        }
        case 'DECREMENT': {
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        }
        case 'RESET': {
            return {
                count: 0
            };
        }
        case 'SET': {
            const count = typeof action.count === 'number' ? action.count : 1;
            return {
                count
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
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// unsubscribe();

// INCREMENT
store.dispatch({
    type: 'INCREMENT'
});

// RESET
store.dispatch({
    type: 'RESET'
});

// DECREMENT
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});