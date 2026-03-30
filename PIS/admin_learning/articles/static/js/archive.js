window.onload = function() {
    var buttons = document.getElementsByClassName('toggle-button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var post = this.parentNode;
            var text = post.getElementsByClassName('article-text')[0];

            if (text.style.display === 'none') {
                text.style.display = 'block';
                this.innerHTML = 'Свернуть';
            } else {
                text.style.display = 'none';
                this.innerHTML = 'Развернуть';
            }
        };
    }
};