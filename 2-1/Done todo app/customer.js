var ul = document.getElementById('list');

document.getElementById('buttonAdd').addEventListener('click', function(){
    var new_li = document.createElement('li');
    var new_bu = document.createElement('button');
    var new_bu_1 = document.createElement('button');
    new_bu_1.className ="done";
    new_bu_1.setAttribute("onclick","ok(this)");
    new_bu.innerText = "X";
    new_bu.className = "close";
    new_bu.setAttribute("onclick","delete_li(this)");
    new_li.appendChild(new_bu_1);
    new_li.innerText = document.getElementById('in').value;
    new_li.appendChild(new_bu);
    ul.appendChild(new_li);
});
var close_bu = document.getElementsByClassName('close');

function delete_li(x){
    ul.removeChild(x.parentNode);
}

function ok(x){
    if(x.parentNode.className == 'complete'){
        x.style.opacity = 0;
        x.parentNode.className = null;
    }
    else {
        x.style.opacity = 1;
        x.parentNode.className = 'complete';
    }
}