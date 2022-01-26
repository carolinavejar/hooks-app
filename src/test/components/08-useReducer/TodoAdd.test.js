import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe('Pruebas del ToDoAdd', ()=> {
    const handleAddToDo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAdd = { handleAddToDo }
        />
    )
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('no debe llamar al handleaddtodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){}});

        expect( handleAddToDo ).toHaveBeenCalledTimes(0)
    });

    test('debe llamar al handleaddtodo', () => {
        const value = 'aprender react';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){}});
        expect(handleAddToDo).toHaveBeenCalledTimes(1);
        expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddToDo).toHaveBeenCalledWith( {
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });
})