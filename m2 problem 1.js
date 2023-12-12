<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse Order Printer</title>
</head>
<body>

<script>
    var numbers = [];

    // Prompt the user for five numbers
    for (var i = 1; i <= 5; i++) {
        var userInput = prompt("Enter number " + i + ":");
        var number = parseFloat(userInput);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            console.log("Invalid input. Please enter a valid number.");
            break;
        }
    }

    console.log("Numbers in reverse order:");

    for (var j = numbers.length - 1; j >= 0; j--) {
        console.log(numbers[j]);
    }
</script>

</body>
</html>
