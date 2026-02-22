const body = document.body;

const colors = {
  grey: 'rgb(159, 159, 159)',
  yellow: 'rgb(164, 160, 41)',
  green: 'rgb(49, 139, 33)',
  blue: 'rgb(53, 142, 193)'
};

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = colors[e.target.id];
  });
});

