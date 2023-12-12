<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Dice Roller</title>
</head>
<body>

<script>
    // JavaScript code to define a function for a random dice roll with a specified number of sides
    function rollCustomDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    // JavaScript code for the main program to roll the dice until the result is the maximum number
    var maxNumber = prompt("Enter the maximum number on the dice:");
    var max = parseInt(maxNumber);

    // Check if the input is a valid number
    if (isNaN(max) || max <= 1) {
        console.log("Invalid input. Please enter a valid maximum number greater than 1.");
    } else {
        while (true) {
            var result = rollCustomDice(max);

            console.log("Dice Roll: " + result);

            if (result === max) {
                console.log("Reached the maximum number. Stopping operation.");
                break;
            }
        }
    }
</script>

</body>
</html>
