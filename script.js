document.addEventListener('DOMContentLoaded', function() {

  // ===== Nút đổi nền =====
  const button = document.getElementById('changeColorBtn');
  const colors = ['#ffcccc', '#ffe6e6', '#e6ffe6', '#e6f0ff', '#fff0e6'];

  button.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(to bottom, ${randomColor}, #fff)`;
  });

  // ===== Tạo đèn LED =====
  const lightsContainer = document.querySelector('.lights');
  const lightCount = 15;
  for(let i=0; i<lightCount; i++){
    const light = document.createElement('span');
    light.style.top = Math.random() * 150 + 'px';
    light.style.left = Math.random() * 120 + 'px';
    light.style.backgroundColor = ['red','yellow','blue','white','orange'][Math.floor(Math.random()*5)];
    light.style.animationDuration = 0.5 + Math.random() * 1.5 + 's';
    lightsContainer.appendChild(light);
  }

  // ===== Tuyết rơi =====
  const snowCount = 50;
  for(let i=0; i<snowCount; i++){
    const snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.style.left = Math.random()*window.innerWidth + 'px';
    snow.style.animationDuration = 3 + Math.random()*7 + 's';
    snow.style.fontSize = 10 + Math.random()*10 + 'px';
    snow.textContent = '❄';
    document.body.appendChild(snow);
  }

});
