document.querySelectorAll('.sentiment, .need').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('message').textContent = `Vous avez sélectionné : ${this.textContent}`;
    });
});
