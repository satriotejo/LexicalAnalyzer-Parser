// Input Sentence User
let inputValue = document.getElementById("inputlexical") 
text = inputValue.toLowerCase()+"#";

// Initialization
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
state_list =[];

transition_list = {}

// space before input string
transition_list[["q0", "#"]] = "ACCEPT";

// subjek mutter
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek vater
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek bruter
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek onkel
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek tante
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek ich
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek sie
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek wir
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

// subjek du
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";
transition_list[["q0", "#"]] = "ACCEPT";

const lexicalAnalyzer = () =>{
    var idx_char = 0;
    var state = 'q0';
    var current_token = '';
    while (state !== 'accept'){
        var current_char = text[idx_char];
        current_token += current_char;
        state = transition_list[(state, current_char)];
        if (state === ....){
            document.getElementById("result-lexical").innerHTML = `Current Token: ${current_token} valid`;
        }
        if (state === "error"){
            document.getElementById("result-lexical").innerHTML = "error";
            break;
        }
        idx_char = idx_char + 1;
    }
    if (state === "accept"){
        document.getElementById("result-lexical").innerHTML = `Semua Token di Input: ${inputValue} valid`;
    } 
  }

