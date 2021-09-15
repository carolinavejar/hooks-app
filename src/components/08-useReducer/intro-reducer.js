const initialState = [ {
    id: 1,
    todo: 'Comprar pan', 
    done: false
}];

const toDoReducer = (state = initialState, action) => {
    if(action?.type == "add") {
        return [...state, action.payload]
    }
    return state;
};

let toDos = toDoReducer();
// añadir nuevo todo 
const newTodo = {
    id: 2,
    todo: 'Comprar chocolate', 
    done: false
};

const addToDoAction = {
    type: 'add',
    // newTodo
    payload : newTodo // ->estandar
}

toDos = toDoReducer(toDos, addToDoAction);

console.log(toDos);