import React, { useState } from 'react';
import { RealExampleRef }  from '../../../components/04-useRef/RealExampleRef';

import { shallow } from 'enzyme/build';
// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe('Pruebas ...', () => {
    let wrapper = shallow(<RealExampleRef />);
    test('debe mostrarse correctamente ', () => {
        expect (wrapper).toMatchSnapshot(); 
    });

    test('Debe mostrar correctamente el componente <MultipleCustomHooks>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });

})