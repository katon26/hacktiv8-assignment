import Redux from 'redux';

const { createStore } = Redux;

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 }
        case "DECREMENT":
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

// buat store dari redux
let store = createStore(counter)

// subscribe untuk monitoring perubahan state
store.subscribe(() => console.log(store.getState()))

// dispatch untuk memanggil suatu action
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })