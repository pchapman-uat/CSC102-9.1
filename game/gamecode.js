
function playGame() {
    //Get HTML element's value of "die"
    var die_element = document.getElementById("die");
    var die_value = die_element.value;
    console.log(die_value)
    //Get HTML element's value of "mode"
    var mode = document.getElementById("mode");
    var mode_val = mode.value;
    console.log(mode_val)
    //Get HTML element's value of "die_num"
    var die_num_el = document.getElementById("die_num");
    var die_num = die_num_el.value;
    //Get HTML element's value of "grace"
    var grace_el = document.getElementById("grace");
    var grace = grace_el.value;
    //Get HTML element's value of "goal"
    var goal_el = document.getElementById("goal");
    var goal = goal_el.value;
    console.log(die_num)
    var possible_types = [
        {name: "Average", function: Average},
        {name: "Sum", function: Sum},
        {name: "Max", function: Max}, 
        {name: "Min", function: Min},
    ]
    console.log(possible_types[mode_val].name)
    //Get the following HTML elements
    document.getElementById("lose").innerHTML = ""
    document.getElementById("win").innerHTML = ""
    document.getElementById("error").innerHTML = ""
    document.getElementById("error_txt").innerHTML = ""
    
    //Error haldling for user inputs
    if((Number(die_num) > 0) && (Number(goal) >= 0) && (Number(grace) >= 0) && (Number(grace) <= 100)) {
        //Run respective function of the chosen mode and save values to results var
        var results = possible_types[mode_val].function(die_value, die_num, goal, grace)
        //Check if user won or lost based on results
        if (results[1] === false) {
            document.getElementById("lose").innerHTML = "You lose :("
        } else {
            document.getElementById("win").innerHTML = "You win :D"
        }
        //Provide number of how much higher/lower the user could be based on grace var
        grace = results[2] * (grace/100)
        //Show the statistics based on this round to the HTML page
        document.getElementById("results").innerHTML = `Mode: ${possible_types[mode_val].name} <br> Result: ${results[0]} <br> Grace: ±${grace}`
        
    } else{
        //in case of error show header and information
        document.getElementById("error").innerHTML = "ERROR!!"
        document.getElementById("error_txt").innerHTML = "All values must be grater than 0, and the grace must be between 0 and 100"

    }
    

    
}

//Function to roll die
function rolldie(die_type, quantity){
    var results = []
    var count = 1
    var die = 0
    //Roll all die based on quantity and append to array 
    while (count <= quantity) {
        die = Math.ceil(Math.random()*die_type)
        if (results.length === 0) {
            results = [die]
        } else {
            results.push(die)
        }
        count++
    }
    console.log(results)
    //Return the results array to the function
    return results
}

//CHeck if use won or lost
function check(value, max, goal, grace) {
    max = max * (grace/100)
    console.log(goal)
    console.log(value)
    console.log(max)
    //Check if the users results value is between the goal ± the detimened grace value from %
    //Return true or fales if the user won or lost
    if ((value === goal) || ((Number(value) <= (Number(goal) + Number(max))) && (Number(value) >= (Number(goal) - Number(max))))) {
        console.log("You win!")
        return true
    } else {
        console.log("You lose!")
        return false
    }
}

//calculate the Average of die and return statistics
function Average(die_type, quantity, goal, grace){
    var max = die_type
    var results = rolldie(die_type, quantity)
    var sum = 0 
    //Add all values of the die (results) array
    for (i in results){
        sum = Number(sum) + Number(results[i])
    }
    //Calculate the average of all the die
    var average = sum / results.length
    //Run the check function to see if the user won or lost
    var win = check(average, max, goal, grace)
    //Return the average, win, and max values to the function
    values = [average, win, max]
    return values    
}
function Sum(die_type, quantity, goal, grace){
    var max = Number(die_type) * Number(quantity)
    //Call the rolldie function which outputs the dice in an array
    var results = rolldie(die_type, quantity)
    var sum = 0 
    //Add up all values of the die based on the die (results) array
    for (i in results){
        sum = Number(sum) + Number(results[i])
    }
    //Check if the user won based on provided infomration
    var win = check(sum, max, goal, grace)
    //return the sum, win, and max values
    values = [sum, win, max]
    return values 
}

function Max(die_type, quantity, goal, grace){
    var max = Number(die_type)
    var highest = 0
    var results = rolldie(die_type, quantity)
    //For each values in the results array check if it is grater than the last
    for(i in results) {
        //if this is the first values set it to the highest
        if(i == 0) {
            highest = results[i]
        }
        if (results[i] > highest){
            highest = results[i]
        }
    } 
    //Call the check function to see if the user won based on provided inputs
    var win = check(highest, max, goal, grace)
    //return the highest, win, and max values
    values = [highest, win, max]
    return values 

}
function Min(die_type, quantity, goal, grace){
    var max = Number(die_type)
    var lowest = 0
    //Roll the die based on the type and quantity
    var results = rolldie(die_type, quantity)
    //For each value in results check if it is less than the last value
    for(i in results) {
        //if this is the first value set it to the lowest
        if(i == 0) {
            lowest = results[i]
        }
        if (results[i] < lowest){
            lowest = results[i]
        }
    } 
    //Check if the user won based on the values
    var win = check(lowest, max, goal, grace)
    //Return the lowest, win, and max values
    values = [lowest, win, max]
    return values 
}