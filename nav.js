function loadnav(location){
    document.getElementById("nav").innerHTML=`
    <!--Button for home page-->
    <button onclick="window.location.href='${location}index.html'">
        Home
    </button>
    <!--Button for game page-->
    <button onclick="window.location.href='${location}boards/boards_ACS.html'">
        ACS Board
    </button>
    <!--Button for game page-->
    <button onclick="window.location.href='${location}boards/boards_GP.html'">
        GP Board
    </button>
    <!--Button for strings page-->
    <button onclick="window.location.href='${location}strings.html'">
        Strings
    </button>
    <!--Button for game page-->
    <button onclick="window.location.href='${location}game/game_info.html'">
        Play my Game!
    </button>
    `
}

function submit() {
    console.log("Submited!")
    
    // Get elements by id of f_name, l_name, and zip
    var f_name = document.getElementById("f_name").value
    var l_name = document.getElementById("l_name").value
    var zip = document.getElementById("zip").value
    
    // log the first and last name
    console.log(f_name)
    console.log(l_name)
    
    // Concat the first and last name
    var full = f_name + l_name 
    console.log(full.length)
    
    // Check if the length of both names is more than 20
    if (full.length > 20) {
        console.log("Over 20!")
        //Check if the zip is a intager, and is exactly 5 digits long
        if((parseInt(zip) == zip) && zip.length == 5){
            console.log("Valid Zip")

            //Alert letting user know information has been submited
            alert("Your information has been submited \nNo information was kept, this is only for a demonstration \n Your secret message is: SquidsRule")
        } else {
            
            //Alert if zip is not valid
            alert("Not a valid vip, must be a whole number exactly 5 digits long")
        }
        
    } else {
        console.log("No over 20")

        //Alert if lenght is not valid
        alert(`Length of first and last name must be over 20, currently ${full.length}/20`)
    }
    
    // The following code could be ran if the palindrome where to be checked only on submit

    // palindrome()

}

function palindrome(){
    // Get the value of the input box
    let input = document.getElementById("palindrome").value

    // Split the input into an array
    let array = input.split("")
    // use the reverse function for arrays
    let reversed = array.reverse()
    // Join back the array into a string
    let joined = reversed.join("")

    // Check if the joined and input values are the same, as well if the input is not blank
    if((joined === input) && (input != "")){
        // Sent an alert if it is a palindrome
        alert("It is a palindrome!")
    }

} 