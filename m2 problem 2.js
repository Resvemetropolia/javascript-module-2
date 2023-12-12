<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Participants List</title>
</head>
<body>

<script>
    var numParticipants = prompt("Enter the number of participants:");

    var num = parseInt(numParticipants);
    if (isNaN(num) || num <= 0) {
        document.body.innerHTML = "<h2>Participants List</h2>" +
                                  "<p>Invalid input. Please enter a valid number of participants greater than 0.</p>";
    } else {
        var participants = [];
        for (var i = 1; i <= num; i++) {
            var participantName = prompt("Enter the name of participant " + i + ":");
            participants.push(participantName);
        }
        participants.sort();

        var orderedList = document.createElement("ol");
        document.body.appendChild(orderedList);

        participants.forEach(function (participant) {
            var listItem = document.createElement("li");
            listItem.textContent = participant;
            orderedList.appendChild(listItem);
        });
    }
</script>

</body>
</html>
