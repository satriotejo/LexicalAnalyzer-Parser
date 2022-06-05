
// Get input from User
let text = document.getElementById('form-parser').value;
let lower_case = text.toLowerCase();

// Initiazation
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Subjek state
list_state = ['']

var transition_table = {};

function transition_table(state,alphabet){
    var result;
    
}

// update transition

function lexicalAnalyzer(){
    text = document.getElementById('input-parser').value;
    document.getElementById("result-parser").innerHTML = text;
    return false;
}

lexicalAnalyzer();