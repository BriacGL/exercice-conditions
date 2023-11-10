// Declare and define three variables using a numerical value

// * If the three variables are equal, display "The three variables are the same" in the console
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
// * If the variables are all different display "all variables are different" in the console

const a = 2;
const b = 2;
const c = 3;

if (a === b && b === c) {
    console.log('Les trois variables sont identiques');
} else if (a === b || b === c || a === c) {
    console.log('Deux des variables sont identiques');
} else {
    console.log('Toutes les variables sont différentes');
}