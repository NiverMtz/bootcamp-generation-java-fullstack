describe('Probando Jest', () => {
    test('Prueba de objetos iguales', () => {
        const datos1 = {
            nombre: 'Niver Mtz',
            edad: 25
        };

        const datos2 = {
            nombre: 'Niver Mtz',
            edad: 25
        }

        expect(datos1).toEqual(datos2)
    })
})