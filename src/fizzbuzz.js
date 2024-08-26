function GenerarNumeroFizzBuzz(num) {
    let output = "";
    if(num % 3 == 0) {
        output += "Fizz";
    }
    if(num % 5 == 0) {
        output += "Buzz";
    }
    if(output == "") {
        output = num;
    }
    return output.toString()
}

export default GenerarNumeroFizzBuzz;