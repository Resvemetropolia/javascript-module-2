<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Names List</title>
</head>
<body>

<script>
    var dogNames = [];
    for (var i = 1; i <= 6; i++) {
        var dogName = prompt("Enter the name of dog " + i + ":");
        dogNames.push(dogName);
    }
    dogNames.sort(function (a, b) {
        return b.localeCompare(a);
    });
    var unorderedList = document.createElement("ul");
    document.body.appendChild(unorderedList);

    dogNames.forEach(function (dogName) {
        var listItem = document.createElement("li");
        listItem.textContent = dogName;
        unorderedList.appendChild(listItem);
    });
</script>

</body>
</html>
