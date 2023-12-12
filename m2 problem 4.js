<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Sorter</title>
</head>
<body>

<script>
    // JavaScript code to prompt the user for numbers until zero and print them in reverse order
    var numbers = [];

    // Prompt the user for numbers until zero is entered
    while (true) {
        var userInput = prompt("Enter a number (enter 0 to stop):");
        var number = parseFloat(userInput);

        if (!isNaN(number)) {
            if (number === 0) {
                break; // Stop if zero is entered
            }
            numbers.push(number);
        } else {
            console.log("Invalid input. Please enter a valid number.");
            break;
        }
    }

    numbers.sort(function(a, b) {
        return b - a;
    });
    console.log("Numbers in descending order:");
    console.log(numbers);
</script>

</body>
</html>
