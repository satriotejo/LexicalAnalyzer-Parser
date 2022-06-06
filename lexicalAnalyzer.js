// Input Sentence User
let inputValue = document.getElementById("inputlexical") 
text = inputValue.toLowerCase()+"#";

// Initialization
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
state_list =["q1","q2","q3","q4","q5"];

transition_list = {}

// space before input string
transition_list[["q1", " "]] = "q1";

// subjek mutter
transition_list[["q1", "m"]] = "q2";
transition_list[["q2", "u"]] = "q3";
transition_list[["q3", "t"]] = "q4";
transition_list[["q4", "t"]] = "q5";
transition_list[["q5", "e"]] = "q6";
transition_list[["q6", "r"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";

// subjek vater
transition_list[["q1", "v"]] = "q8";
transition_list[["q8", "a"]] = "q4";
transition_list[["q4", "t"]] = "q5";
transition_list[["q5", "e"]] = "q6";
transition_list[["q6", "r"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";

// subjek bruter
transition_list[["q1", "b"]] = "q14";
transition_list[["q14", "r"]] = "q15";
transition_list[["q15", "u"]] = "q16";
transition_list[["q16", "d"]] = "q5";
transition_list[["q5", "e"]] = "q6";
transition_list[["q6", "r"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";


// subjek onkel
transition_list[["q1", "o"]] = "q21";
transition_list[["q21", "n"]] = "q22";
transition_list[["q22", "k"]] = "q23";
transition_list[["q23", "e"]] = "q24";
transition_list[["q24", "l"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";


// subjek tante
transition_list[["q1", "t"]] = "q11";
transition_list[["q11", "a"]] = "q12";
transition_list[["q12", "n"]] = "q13";
transition_list[["q13", "t"]] = "q10";
transition_list[["q10", "e"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";


// subjek ich
transition_list[["q1", "i"]] = "q19";
transition_list[["q19", "c"]] = "q20";
transition_list[["q20", "h"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";

// subjek sie
transition_list[["q1", "s"]] = "q9";
transition_list[["q9", "i"]] = "q10";
transition_list[["q10", "e"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";

// subjek wir
transition_list[["q1", "w"]] = "q17";
transition_list[["q17", "i"]] = "q6";
transition_list[["q6", "r"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";

// subjek du
transition_list[["q1", "d"]] = "q18";
transition_list[["q18", "u"]] = "q7";
transition_list[["q7", "#"]] = "ACCEPT";
transition_list[["q7", ""]] = "ACCEPT";
transition_list[["q7", " "]] = "q25";
transition_list[["q25", " "]] = "q25";


const lexicalAnalyzer = () =>{
    var idx_char = 0;
    var state = 'q0';
    var current_token = '';
    while (state !== 'accept'){
        var current_char = text[idx_char];
        current_token += current_char;
        state = transition_list[(state, current_char)];
        if (state === "q58"){
            document.getElementById("current-token").innerHTML = `Current Token: ${current_token} valid`;
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

