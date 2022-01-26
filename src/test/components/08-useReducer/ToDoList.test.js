import { demoTodos } from "../../fixtures/demoTodos";
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

import { ToDoList } from "../../../components/08-useReducer/ToDoList";

describe('Pruebas en To Do List', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <ToDoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    )
            
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener x TodoListItem', () => {
        expect(wrapper.find('ToDoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('ToDoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function)); 
    });

})