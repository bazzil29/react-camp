var ul = document.getElementById('list');
var input = document.getElementById('in');

renderFromLocalStorageToHTML();
/*
* add todo
* @param no
* */
document.getElementById('buttonAdd').addEventListener('click', function(){

    addTodoToLocalStorage(input.value);
    renderFromLocalStorageToHTML();

});


/*
 *delete li
 * @param close button
 */
function delete_li(x){

    todosOjb = getTodosFromLocalStorage();
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
 *save todos to storage
 * @param todos ojb
 */
function  saveToLocalStorage(ojb){

    var str = JSON.stringify(ojb);
    localStorage.setItem('todos' , str);

}



/*
 *comlete todo
 * @param click event
 */
function ok(event){

    var name = event.innerText;
    var todosOjb = getTodosFromLocalStorage();
    //console.log(event.className);

    if(event.className === 'complete'){

        for(var i = 0 ; i < todosOjb.length ; i++){

            if(name == (todosOjb[i].text+'X')){

                todosOjb[i].complete = false;
                break;
            }
        }
    }
    else {

        for(var i = 0 ; i < todosOjb.length ; i++){

            if(name == (todosOjb[i].text+'X')){

                todosOjb[i].complete = true;
                break;
            }
        }
    }

    saveToLocalStorage(todosOjb);
    renderFromLocalStorageToHTML();

}



/*
 *add toto to HTML
 * @param text
 */

function addTodoToLocalStorage(text){

    var todosStr = JSON.stringify(getTodosOjbFromLocalStorageAndAdd(text));

    return localStorage.setItem('todos' , todosStr);

}


/*
 *get todos ojb from storage and add todo
 * @param text
 */
function getTodosOjbFromLocalStorageAndAdd(text){

    var todosOjb = getTodosFromLocalStorage();

    var isHas;

    for(var i = 0 ; i < todosOjb.length ; i++){
        if(text == todosOjb[i].text){
            isHas = true;
            break;
        }
    }

    if(isHas||text==''){
        alert("This target has already existed! \n plz,type an other target!");
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
 *get todos ojb from storage
 * @param none
 */
function getTodosFromLocalStorage() {

    var str = localStorage.getItem('todos');

    if(str != null){
        return JSON.parse(str);
    }
    else{
        return [];
    }

}



/*
 *render storage to HTML
 * @param none
 */
function renderFromLocalStorageToHTML() {
    ul.innerHTML = '';
    var todosOjb = getTodosFromLocalStorage();

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
