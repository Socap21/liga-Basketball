document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  const colorEvenRowsBtn = document.getElementById('colorEvenRows');
  const colorOddRowsBtn = document.getElementById('colorOddRows');
  const filter1to10Btn = document.getElementById('filter1to10');
  const filter11to20Btn = document.getElementById('filter11to20');

  const data = [
      { id: 1, name: 'Kevin Harrell', team: 'Top Club', position: 'Guard' },
      { id: 2, name: 'James Fletcher', team: 'Top Club', position: 'Center' },
      { id: 3, name: 'Jeff Montes', team: 'Top Club', position: 'Forward-Guard' },
      { id: 4, name: 'Bryan Warner', team: 'Top Club', position: 'Forward-Center' },
      { id: 5, name: 'Scott Dale', team: 'Top Club', position: 'Forward' },
      { id: 6, name: 'Kevin Roldan', team: 'Top Club', position: 'Center' },
      { id: 7, name: 'James Maso', team: 'Top Club', position: 'Guard' },
      { id: 8, name: 'Erick Rios', team: 'Top Club', position: 'Forward' },
      { id: 9, name: 'Santiago Deps', team: 'Top Club', position: 'Guard' },
      { id: 10, name: 'Carlos Souza', team: 'Top Club', position: 'Forward-Center' },
      { id: 11, name: 'Nicolas Vargas', team: 'Top Club', position: 'Forward-Guard' },
      { id: 12, name: 'Pedro Arroyo', team: 'Top Club', position: 'Guard' },
      { id: 13, name: 'Rafa Salinas', team: 'Top Club', position: 'Center' },
      { id: 14, name: 'Sandro Posada', team: 'Top Club', position: 'Center' },
      { id: 15, name: 'Daniel Torres', team: 'Top Club', position: 'Center' },
      { id: 16, name: 'Juan Garcia', team: 'Top Club', position: 'Forward-Guard' },
      { id: 17, name: 'Mateo Vega', team: 'Top Club', position: 'Forward' },
      { id: 18, name: 'Sebas Velarde', team: 'Top Club', position: 'Guard' },
      { id: 19, name: 'Camilo Arcila', team: 'Top Club', position: 'Forward-Center' },
      { id: 20, name: 'Julian Muños', team: 'Top Club', position: 'Forward-Guard' },
  ];

  const renderTable = (rows) => {
      dataTable.innerHTML = ''; // Limpiar el contenido existente

      rows.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
              <td>${row.id}</td>
              <td>${row.name}</td>
              <td>${row.team}</td>
              <td>${row.position}</td>
          `;
          dataTable.appendChild(tr);
      });
  };

  const filterTable = (query) => {
      const filteredRows = data.filter(row => 
          row.name.toLowerCase().includes(query.toLowerCase())
      );
      renderTable(filteredRows);
  };

  const colorRows = (isEven) => {
      const rows = dataTable.getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
          rows[i].style.backgroundColor = '';
      }
      for (let i = 0; i < rows.length; i++) {
          if ((i % 2 === 0 && isEven) || (i % 2 !== 0 && !isEven)) {
              rows[i].style.backgroundColor = '#f2f2f2';
          }
      }
  };

  const filterByRange = (start, end) => {
      const filteredRows = data.filter(row => row.id >= start && row.id <= end);
      renderTable(filteredRows);
  };

  searchInput.addEventListener('input', () => filterTable(searchInput.value));
  colorEvenRowsBtn.addEventListener('click', () => colorRows(true));
  colorOddRowsBtn.addEventListener('click', () => colorRows(false));
  filter1to10Btn.addEventListener('click', () => filterByRange(1, 10));
  filter11to20Btn.addEventListener('click', () => filterByRange(11, 20));

  renderTable(data); // Inicializar la tabla con todos los datos
});
  
