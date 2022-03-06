document.querySelector('.add-title').onclick = function() {
    if (document.querySelector('.list-input input').value.length==0) {
        alert("Hey! You forgot to add a new title :(")
    }
}