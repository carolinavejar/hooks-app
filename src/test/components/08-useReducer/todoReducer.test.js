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
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe borrar un todo', () => {
        const state = todoReducer(demoTodos, { type : 'remove', payload: { id: 1}});
        console.log(`state`, state);
        expect(state.length).toBe(1);
        
    });

    test('debe hacer Toggle un todo', () => {
        const state = todoReducer(demoTodos, { type : 'toggle', payload: 2});
        console.log(`state`, state);
        expect(state.length).toBe(2);
        
    });
})