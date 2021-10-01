import React from 'react';
import { HooksApp }  from '../HooksApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';

// No las toma de setupTests.js , así que las dejaré aquí por ahora
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer ( { mode : 'deep' } ));

describe("Pruebas de HooksApp .... .test.js", ()=> { 
    let wrapper = shallow(<HooksApp />);

    test('debe de mostrar <HooksApp /> correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    });

});

