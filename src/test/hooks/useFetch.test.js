import { renderHook } from "@testing-library/react-hooks"; 
import { useFetch } from "../../hooks/useFetch"; 

describe('Pruebas en useFectch', ()=> {

    test('Debe retornar info por defecto ', () => {
        const { result } = renderHook   (() =>  useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        const { data, loading, error } = result.current;
        expect ( data ).toBe(null);
        expect ( loading ).toBe(true);
        expect ( error ).toBe(null);
    });

    test('Debe retornar info deseada, loading y error en false ', async() => {
        const { result, waitForNextUpdate } = renderHook   (() =>  useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate({timeout:10000}); 

        const { data, loading, error } = result.current;
 
        expect ( data.length ).toBe( 1 );
        expect ( loading ).toBe(false);
        expect ( error ).toBe(null);
    });

    test('Debe manejar el error', async() => {
        const { result, waitForNextUpdate } = renderHook   (() =>  useFetch('https://reqres.in/apiss/users?page=2'));

        await waitForNextUpdate({timeout:10000}); 

        const { data, loading, error } = result.current;
 
        expect ( data ).toBe(  null);
        expect ( loading ).toBe(false);
        expect ( error ).toBe('No se pudo cargar la información');
    });
    
})