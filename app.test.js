const puedeEntrar = require('./app');

test(' Mayor de edad, puede entrar', () => {
    expect(puedeEntrar(20)).toBe(true);
});

test('Menor de edad, no puede entrar', () => {
    expect(puedeEntrar(15)).toBe(false);
});