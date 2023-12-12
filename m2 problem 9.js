<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even Numbers</title>
</head>
<body>

<script>
    function even(numbersArray) {
        var evenArray = [];
        for (var i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] % 2 === 0) {
                evenArray.push(numbersArray[i]);
            }
        }
        return evenArray;
    }

    var originalArray = [2, 7, 4];
    var evenArrayResult = even(originalArray);
    console.log("Original Array:", originalArray);
    console.log("Even Numbers Array:", evenArrayResult);
</script>

</body>
</html>
