let form = document.getElementById("form");
let addToDo = document.getElementById("addToDo");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");
let toDos = document.getElementById("toDos");

addToDo.addEventListener('click',function(){
    let paragraf = document.createElement('li');
    toDos.appendChild(paragraf);
    paragraf.innerHTML = inputText.value;
    if(inputText.value === ""){
        alert("Lütfen değer giriniz !")
        paragraf.style.display = 'none'
    }
    inputText.value = ""
    paragraf.classList.add('paragraf');

    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration = 'line-through'
        paragraf.style.cursor = 'pointer';
    })

    paragraf.addEventListener('dblclick', function(){
        paragraf.style.display = 'none';
    })

    clearToDo.addEventListener('click', function(){
        toDos.removeChild(paragraf);
    })
})




