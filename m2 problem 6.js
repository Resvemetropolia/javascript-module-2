<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
</head>
<body>

<script>
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // JavaScript code for the main program to roll the dice until the result is 6
    var resultList = document.createElement("ul");
    document.body.appendChild(resultList);

    while (true) {
        var result = rollDice();
        console.log("Dice Roll: " + result);

        var listItem = document.createElement("li");
        listItem.textContent = "Dice Roll: " + result;
        resultList.appendChild(listItem);

        if (result === 6) {
            break; // Stop rolling if the result is 6
        }
    }
</script>

</body>
</html>
