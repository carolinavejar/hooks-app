import React from 'react';
import { TodoApp }  from '../../../components/08-useReducer/TodoApp';
import '@testing-library/jest-dom';
import { demoTodos } from '../../fixtures/demoTodos';

import { shallow, mount } from 'enzyme/build';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe('Pruebas en el <ToDoApp /> ', () => {

    const wrapper = shallow(<TodoApp/>);

    Storage.prototype.setItem = jest.fn(()=> {});
    test('debe de mostrar <ToDoApp /> correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    });

    test('debe agregar un ToDo', () => {
        const wrapper = mount(<TodoApp/>);

        act(()=> {
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[1]);
        })
        
        expect(wrapper.find('h1').text().trim()).toBe('To Do App ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('debe eliminar un ToDo', () => {
        wrapper.find('TodoAdd').prop('handleAdd')(demoTodos[0]);
        wrapper.find('ToDoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('To Do App ( 0 )');
    });
})