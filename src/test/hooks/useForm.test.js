import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas un useForm',()=>{
    const initialForm = {
        name: 'Carito',
        email: 'vejarcarolina.95@gmail.com'
    };
    
    test('Debe de regresar un form por defecto' , () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect ( formValues ).toEqual( initialForm );
        expect ( typeof handleInputChange ).toBe('function');
        expect ( typeof reset ).toBe('function');
    });

    test('Debe cambiar el nombre del formulario' , () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;

        act(()=> {
            handleInputChange({
                target : {
                    name: 'name',
                    value: 'Caritopp'
                }
            })
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({...initialForm, name: 'Caritopp'})
    });

    test('Debe reestablecer el formulario con reset' , () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;

        act(()=> {
            handleInputChange({
                target : {
                    name: 'name',
                    value: 'Caritopp'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm )});
})