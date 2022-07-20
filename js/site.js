document.getElementById("btnSubmit").addEventListener("click", FizzBuzz);
function FizzBuzz(){
    //get references to the inputs
    let fizz = document.getElementById("fizzNum");
    let buzz = document.getElementById("buzzNum");

    //parse the numbers --> make sure the inputs are NUMBERS
    let fizzNum = parseInt(fizz.value);
    let buzzNum = parseInt(buzz.value);

    let displayText = "";
    let fizzResult, buzzResult = 0;

    //do something with the inputs
    for (let loop = 1; loop <= 100; loop++){
        //1 2 3 4...100
        //fizzNum = 3
        //buzzNum = 5
        //
        fizzResult = loop % fizzNum; //modulus operator gives you the remainder after dividing by itself
        buzzResult = loop % buzzNum; //this is the modulus of the second number 1 % 5 = 5, 2 % 5 = 5... 5 % 5 =0, 6 % 5 = 1
        
        if(fizzResult == 0 && buzzResult == 0){
            displayText += "FIZZBUZZ, "
        }
        else if(fizzResult == 0){
            displayText += "FIZZ, ";
        }
        else if(buzzResult == 0){
            displayText += "BUZZ, "
        }
        else{
            displayText += `${loop}, `
        }
    }
    document.getElementById("results").innerText = displayText;
}
