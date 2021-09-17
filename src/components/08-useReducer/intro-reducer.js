const initialState = [ {
    id: 1,
    todo: 'Comprar pan', 
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type == "add") {
        return [...state, action.payload]
    }
    return state;
};

let toDos = todoReducer();
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

toDos = todoReducer(toDos, addToDoAction);

console.log(toDos);