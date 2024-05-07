const neonBtn = document.querySelector('.neon-btn');
neonBtn.addEventListener('mouseover', function() {
    document.body.style.cursor = 'url(amongus-dedo.png), auto';
});

neonBtn.addEventListener('mouseout', function() {
    document.body.style.cursor = 'auto';
});
