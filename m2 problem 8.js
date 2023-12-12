<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Concatenation</title>
</head>
<body>

<script>
    function concat(arr) {
        var result = "";
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    var namesArray = ["Johnny", "DeeDee", "Joey", "Marky"];
    var concatenatedString = concat(namesArray);

    document.body.innerHTML = "<h2>String Concatenation</h2>" +
                              "<p>Concatenated String: " + concatenatedString + "</p>";
</script>

</body>
</html>
