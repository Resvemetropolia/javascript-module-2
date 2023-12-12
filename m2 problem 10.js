<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting Program</title>
</head>
<body>

<script>
    function initializeCandidates(numCandidates) {
        var candidates = [];
        for (var i = 1; i <= numCandidates; i++) {
            var candidateName = prompt("Enter the name for candidate " + i + ":");
            candidates.push({ name: candidateName, votes: 0 });
        }
        return candidates;
    }

    function conductVoting(candidates, numVoters) {
        for (var i = 1; i <= numVoters; i++) {
            var vote = prompt("Voter " + i + ", enter the name of the candidate you want to vote for (or press Enter for an empty vote):");
            var selectedCandidate = candidates.find(candidate => candidate.name === vote);

            if (selectedCandidate) {
                selectedCandidate.votes++;
                console.log("Vote recorded for " + selectedCandidate.name);
            } else if (vote === "") {
                console.log("Empty vote recorded");
            } else {
                console.log("Invalid candidate name. Vote not recorded.");
            }
        }
    }

    function announceResults(candidates) {
        candidates.sort((a, b) => b.votes - a.votes);

        console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
        console.log("Results:");

        candidates.forEach(candidate => {
            console.log(candidate.name + ": " + candidate.votes + " votes");
        });
    }
    var numCandidates = prompt("Enter the number of candidates:");
    var candidateList = initializeCandidates(numCandidates);

    var numVoters = prompt("Enter the number of voters:");
    conductVoting(candidateList, numVoters);

    announceResults(candidateList);
</script>

</body>
</html>
