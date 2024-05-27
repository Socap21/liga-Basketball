document.addEventListener('DOMContentLoaded', function () {
    const playerList = document.querySelectorAll('#columna-1 li');
    const showAllButton = document.getElementById('show-all');
    const showOddButton = document.getElementById('show-odd');
    const showEvenButton = document.getElementById('show-even');
  
    function showAllPlayers() {
      playerList.forEach(player => {
        player.style.display = 'block';
      });
    }
  
    function showOddPlayers() {
      playerList.forEach((player, index) => {
        player.style.display = (index % 2 !== 0) ? 'block' : 'none';
      });
    }
  
    function showEvenPlayers() {
      playerList.forEach((player, index) => {
        player.style.display = (index % 2 === 0) ? 'block' : 'none';
      });
    }
  
    showAllButton.addEventListener('click', showAllPlayers);
    showOddButton.addEventListener('click', showOddPlayers);
    showEvenButton.addEventListener('click', showEvenPlayers);
  });
  