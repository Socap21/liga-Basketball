document.addEventListener('DOMContentLoaded', function () {
    const playerRows = document.querySelectorAll('.contenedor .columna ol li');
    const showAllButton = document.getElementById('show-all');
    const showOddButton = document.getElementById('show-odd');
    const showEvenButton = document.getElementById('show-even');
  
    function showAllPlayers() {
      playerRows.forEach(row => {
        row.style.display = 'block';
      });
    }
  
    function showOddPlayers() {
      playerRows.forEach((row, index) => {
        row.style.display = (index % 2 !== 0) ? 'block' : 'none';
      });
    }
  
    function showEvenPlayers() {
      playerRows.forEach((row, index) => {
        row.style.display = (index % 2 === 0) ? 'block' : 'none';
      });
    }
  
    showAllButton.addEventListener('click', showAllPlayers);
    showOddButton.addEventListener('click', showOddPlayers);
    showEvenButton.addEventListener('click', showEvenPlayers);
  });
  