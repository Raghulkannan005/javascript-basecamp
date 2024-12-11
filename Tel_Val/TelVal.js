const input = document.getElementById("user-input")
const output = document.getElementById("results-div")

function validate(){

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if(input.value == ""){
        alert("Please provide a phone number")
    }
    else if(phoneRegex.test(input.value)){
        output.innerHTML = `Valid US number: ${input.value}`;
    }
    else{
        output.innerHTML = `Invalid US number: ${input.value}`;
    }
}

function sweepResult(){
    output.innerHTML = "";
}



// to check if only number is 10 numbers
// if only number is 11 it should be 1 at first
// if filtered is 13 the paranthesis should be at 1 and 5
//if regular contains anything other than paranthesis and hyphen number or

//valid

//  555-555-5555
//  1 555-555-5555
//  1 (555) 555-5555
//  5555555555
//  (555)555-5555
//  1(555)555-5555
//  1 555 555 5555

//invalid

//  2 (757) 622-7382
//  0 (757) 622-7382
//  2 757 622-7382
//  27576227382
//  (275)76227382
//  2(757)6227382
//  2(757)622-7382
//  555-5555
//  5555555
//  1 555)555-5555
// 123**&!!asdf#
//  55555555
//  (6054756961)
//  -1 (757) 622-7382
//  10 (757) 622-7382
//  555)-555-5555
//  (555-555-5555
// (555)5(55?)-5555
//  55 55-55-555-5
//  11 555-555-5555