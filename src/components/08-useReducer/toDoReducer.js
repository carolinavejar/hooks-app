export const todoReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
    
        case 'remove': 
            // The filter() method creates a new array with all elements that pass the test implemented by the provided function
            return state.filter( state2 => state2.id != action.payload.id);
        default:
            return state;
    }
}