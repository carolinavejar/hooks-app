export const todoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
    
        case 'remove': 
            // The filter() method creates a new array with all elements that pass the test implemented by the provided function
            return state.filter( state2 => state2.id != action.payload.id);

        case 'toggle' :
            return state.map(todo => 
               todo.id == action.payload ? { ...todo, done: !todo.done } : todo
            );
        case 'toggle-old': 
            return state.map(todo => {
                if( todo.id == action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}