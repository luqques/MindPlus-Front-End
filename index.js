
var textoClicavel = document.getElementById('keep-logged-in');
var meuCheckbox = document.getElementById('checkbox-keep-logged');
textoClicavel.addEventListener('click', function() {
    meuCheckbox.checked = !meuCheckbox.checked;
});

meuCheckbox.addEventListener('click', function() {
    meuCheckbox.checked = !meuCheckbox.checked;
});