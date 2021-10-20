import React from 'react';
import { shallow } from 'enzyme/build';
// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';


jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en useFectch', ()=> {

    beforeEach( () =>  {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    });

    test('Debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data : null, 
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect ( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar la información', () => {
        useFetch.mockReturnValue({
            data : [{
                author: 'Carito',
                quote: 'Hola mundo'
            }], 
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        console.log(wrapper.html());
        expect(wrapper.find ('.alert').exists()).toBe(false);
        expect(wrapper.find ('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find ('footer').text().trim()).toBe('Carito');      
    })
    
})