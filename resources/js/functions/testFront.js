var list = document.querySelectorAll('.form-item');

list.forEach(element => {
    var node = document.createElement('p'),
    texto = document.createTextNode(element.previousSibling.previousSibling.innerHTML + ": ");
    area = document.createElement('span');

    if(sessionStorage.getItem(element.id)){
        if(element.tagName == 'TEXTAREA'){
            element.innerHTML = sessionStorage.getItem(element.id);
        } else {
            element.setAttribute('value', sessionStorage.getItem(element.id));
        }
        var texto2 = document.createTextNode(sessionStorage.getItem(element.id));
        area.appendChild(texto2);
    }

    node.appendChild(texto);

    document.getElementById('res').appendChild(node);

    node.appendChild(area);

    area.classList.add(element.id);

});

var escreverHTML = function(label, id){
    var valor = document.getElementById(id).value;

    sessionStorage.setItem(id, valor);
    
    var local = document.querySelector(`span.${id}`);
    local.innerHTML = valor;

}