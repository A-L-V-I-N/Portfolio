// JavaScript code for text resizing and repeating typing animation
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

window.addEventListener('resize', debounce(function() {
    // Text resizing code...

    var containerHomeP = document.querySelector('.container-home p');

    var text = "Hello, World! ";
    var speed = 200; // Adjust the speed of typing animation (in milliseconds)
    var cursorSize = '2px'; // Adjust the size of the cursor

    function typeWriter() {
        if (i < text.length) {
            containerHomeP.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            containerHomeP.innerHTML += '<span class="cursor"></span>';
            setTimeout(function() {
                containerHomeP.innerHTML = '';
                i = 0;
                typeWriter();
            }, 2000); // Adjust the delay between animation repeats (in milliseconds)
        }
    }

    var i = 0;
    containerHomeP.innerHTML = '';
    typeWriter();

    var cursor = document.querySelector('.cursor');
    cursor.style.width = cursorSize;
    setInterval(function() {
        cursor.style.opacity = (cursor.style.opacity === '0') ? '1' : '0';
    }, speed);
}), 500); // Adjust the debounce delay (in milliseconds)

// Initial text resizing and repeating typing animation
window.dispatchEvent(new Event('resize'));




window.addEventListener('resize', function() {
    // Refresh the page on window resize
    window.location.reload();
});
