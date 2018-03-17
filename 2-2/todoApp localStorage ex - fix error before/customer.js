var ul = document.getElementById('list');
var input = document.getElementById('in');

renderFromLocalStorageToHTML();

document.getElementById('buttonAdd').addEventListener('click', function(){

    addTodoToLocalStorage(input.value);
    renderFromLocalStorageToHTML();

});


/*
 *
 * @param x
 */
function delete_li(x){

    todosOjb = getTodosFromLocalSrorage();
    var name = x.parentElement.innerText;
    //console.log(x.parentElement.innerText);

    for(var i = 0; i < todosOjb.length ; i++){
        if(name == (todosOjb[i].text+'X')){
            todosOjb.splice(i,1);
        }
    }
    saveToLocalStorage(todosOjb);

    renderFromLocalStorageToHTML();

}

/*
 *
 * @param x
 */
function  saveToLocalStorage(ojb){

    var str = JSON.stringify(ojb);
    localStorage.setItem('todos' , str);

}



/*
 *
 * @param x
 */
function ok(event){

    var name = event.innerText;
    var todosOjb = getTodosFromLocalSrorage();
    //console.log(event.className);

    if(event.className === 'complete'){

        for(var i = 0 ; i < todosOjb.length ; i++){

            if(name == (todosOjb[i].text+'X')){

                todosOjb[i].complete = false;
                break;
            }
            else
                continue;
        }
    }
    else {

        for(var i = 0 ; i < todosOjb.length ; i++){

            if(name == (todosOjb[i].text+'X')){

                todosOjb[i].complete = true;
                break;
            }
            else
                continue;
        }
    }

    saveToLocalStorage(todosOjb);
    renderFromLocalStorageToHTML();

}



/*
 *
 * @param x
 */

function addTodoToLocalStorage(text){

    var todosStr = JSON.stringify(getTodosOjbFromLocalStorageAndAdd(text));

    return localStorage.setItem('todos' , todosStr);

}


/*
 *
 * @param x
 */
function getTodosOjbFromLocalStorageAndAdd(text){

    var todosOjb = getTodosFromLocalSrorage();

    var isHas;

    for(var i = 0 ; i < todosOjb.length ; i++){
        if(text == todosOjb[i].text){
            isHas = true;
            break;
        }
        else{
            continue;
        }
    }

    if(isHas){
        alert("This target has already exist! \n plz type an other target!");
        return todosOjb;
    }
    else{
        todosOjb.push(
            {   text:text,
                complete:false
            });

        return todosOjb;

    }

}


/*
 *
 * @param x
 */
function getTodosFromLocalSrorage() {

    var str = localStorage.getItem('todos');

    if(str != null){
        return JSON.parse(str);
    }
    else{
        return [];
    }

}



/*
 *
 * @param x
 */
function renderFromLocalStorageToHTML() {
    ul.innerHTML = '';
    var todosOjb = getTodosFromLocalSrorage();

    for(var i = 0 ; i <todosOjb.length ; i++){

        var new_li = document.createElement('li');
        var new_bu = document.createElement('button');

        new_bu.innerText = "X";
        new_bu.className = "close";
        new_bu.setAttribute("onclick","delete_li(this)");

        new_li.setAttribute("onclick","ok(this)");
        new_li.innerText = todosOjb[i].text;

        if(todosOjb[i].complete == true){
            new_li.setAttribute("class" , "complete");
        }
        else{
            new_li.setAttribute("class" ,null);
        }

        new_li.appendChild(new_bu);
        ul.appendChild(new_li);

    }

}
