document.addEventListener('mousemove', parallax);

function parallax(e) {
    document.querySelectorAll('.object').forEach((element) => {
        let value_moving = element.getAttribute('data-value');
        let x = e.clientX * value_moving / 150;
        let y = e.clientY * value_moving / 150;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}