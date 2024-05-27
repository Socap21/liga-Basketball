document.addEventListener('DOMContentLoaded', () => {
    const showAllBtn = document.getElementById('show-all');
    const showFirstTenBtn = document.getElementById('show-first-ten');
    const showSecondTenBtn = document.getElementById('show-second-ten');
  
    const players = document.querySelectorAll('#columna-1 li');
    const positions = document.querySelectorAll('.columna:nth-child(2) li');
    const goals = document.querySelectorAll('.columna:nth-child(3) li');
  
    function showAll() {
      players.forEach((player, index) => {
        player.style.display = 'block';
        positions[index].style.display = 'block';
        goals[index].style.display = 'block';
      });
    }
  
    function showFirstTen() {
      showRange(0, 10);
    }
  
    function showSecondTen() {
      showRange(10, 20);
    }
  
    function showRange(start, end) {
      players.forEach((player, index) => {
        if (index >= start && index < end) {
          player.style.display = 'block';
          positions[index].style.display = 'block';
          goals[index].style.display = 'block';
        } else {
          player.style.display = 'none';
          positions[index].style.display = 'none';
          goals[index].style.display = 'none';
        }
      });
    }
  
    showAllBtn.addEventListener('click', showAll);
    showFirstTenBtn.addEventListener('click', showFirstTen);
    showSecondTenBtn.addEventListener('click', showSecondTen);
  });
  