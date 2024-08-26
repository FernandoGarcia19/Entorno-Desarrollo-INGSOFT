import GenerarNumeroFizzBuzz from "./fizzbuzz.js"
describe("FizzBuzz", () => {
    it("generar el numero si no sigue ninguna regla", () => {
        expect(GenerarNumeroFizzBuzz(1)).toEqual("1");
    });
    it("generar el numero para cualquier numero si no sigue ninguna regla", () => {
        expect(GenerarNumeroFizzBuzz(2)).toEqual("2");
    });
    it("generar Fizz cuando el numero sea 3 ", () => {
        expect(GenerarNumeroFizzBuzz(3)).toEqual("Fizz");
    });
    it("generar Buzz cuando el numero sea 5 ", () => {
        expect(GenerarNumeroFizzBuzz(5)).toEqual("Buzz");
    });
    it("generar FizzBuzz cuando el numero sea 15 ", () => {
        expect(GenerarNumeroFizzBuzz(15)).toEqual("FizzBuzz");
    });

});
