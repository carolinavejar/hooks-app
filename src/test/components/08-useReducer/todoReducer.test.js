import {
    todoReducer
} from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en toDoReducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprenderr docker',
            done: false
        }
        const state = todoReducer(demoTodos, { type : 'add', payload: newTodo});
        console.log(`state : `, state);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

})