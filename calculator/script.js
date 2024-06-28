// Get the display element by its ID
const display =document.getElementById("display")

// Function to append input to the display
function appendToDisplay(input){
 display.value +=input;
}
// Function to calculate the result of the of the expression in the display
function calculate(){
    try{
        // Evaluate the expression and update the display value
        display.value=eval(display.value);
    }
    catch(error){
        // If an error occurs during evaluation, display error
        display.value="Error";
    }

}
// Function to clear display
function clearDisplay(){
    display.value=""

}