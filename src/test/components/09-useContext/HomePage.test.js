import React from 'react';
import { HomePage }  from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/jest-dom';

import { shallow, mount } from 'enzyme/build';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe('Pruebas en el <HomePage /> ', () => {
    const user = {
        name: 'Carito',
        email: 'carito@gmail.com'
    };

    // shallow , renderiza solo primer componente
    // mount , renderiza todo en general 

    const wrapper = mount(
        <UserContext.Provider value = {{
            user
        }}>
              <HomePage/>
        </UserContext.Provider>
  
    );

    test('debe de mostrar <HomePage /> correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    });

});
