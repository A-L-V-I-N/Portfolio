// Create a snowflake element
function createSnowflake() {
  const snowflake = document.createElement('span');
  snowflake.innerHTML = '❅';
  snowflake.style.position = 'absolute';
  snowflake.style.color = 'white';
  snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
  snowflake.style.top = '-10px';
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.opacity = Math.random();
  snowflake.style.transition = 'transform 2s linear, opacity 2s linear';
  document.body.appendChild(snowflake);

  // Animate snowflake falling and fading
  requestAnimationFrame(() => {
    snowflake.style.transform = `translateY(${window.innerHeight}px)`;
    snowflake.style.opacity = 0;
  });

  // Remove snowflake from DOM after animation ends
  snowflake.addEventListener('transitionend', () => {
    snowflake.remove();
  });
}

// Generate snowfall effect
function snowfall() {
  setInterval(createSnowflake, 100);
}

// Call the snowfall function after the website loads
window.addEventListener('load', snowfall);
