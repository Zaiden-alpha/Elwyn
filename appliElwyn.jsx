document.querySelectorAll('.sentiment, .need').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('message').textContent = ` Tu as sélectionné : ${this.textContent}`;
    });
});
