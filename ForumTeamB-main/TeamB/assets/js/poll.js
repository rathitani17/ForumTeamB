const pollResults = {
    "Call of Duty Ghosts": 40,
    "Titanfall": 30,
    "Battlefield 4": 30
  };
  
  let totalVotes = 100; // Example total votes
  
  document.getElementById('voteButton').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="poll"]:checked');
  
    if (selectedOption) {
      const chosenValue = selectedOption.value;
  
      // Update results based on selection
      pollResults[chosenValue]++;
      totalVotes++;
  
      // Update progress bars
      document.getElementById('progress1').style.width = (pollResults["Call of Duty Ghosts"] / totalVotes) * 100 + '%';
      document.getElementById('progress1').textContent = Math.round((pollResults["Call of Duty Ghosts"] / totalVotes) * 100) + '%';
  
      document.getElementById('progress2').style.width = (pollResults["Titanfall"] / totalVotes) * 100 + '%';
      document.getElementById('progress2').textContent = Math.round((pollResults["Titanfall"] / totalVotes) * 100) + '%';
  
      document.getElementById('progress3').style.width = (pollResults["Battlefield 4"] / totalVotes) * 100 + '%';
      document.getElementById('progress3').textContent = Math.round((pollResults["Battlefield 4"] / totalVotes) * 100) + '%';
    } else {
      alert('Please select an option before voting.');
    }
  });