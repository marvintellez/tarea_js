const listaSuper = document.getElementById("lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("lista-super");

botonAgregar.addEventListener("click", onClickadd);
input.addEventListener("input", onTypeList);

function onClickadd(){
    const li = createListItem(input.value);
    listaSuper.appendChild(li);
    input.value = "";
    botonAgregar.disabled = True;
}

function onTypeList(){
    botonAgregar.disabled = input.value.length === 0;
}

function guardar(){
    FileSystemWritableFileStream.fire({
        position: 'top-end',
        icon: 'success',
        title: 'producto Agregando con exito',
        showConfirmButton: false,
        timer: 1500
    })
}

function createListItem(name){
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar= document.createElement("button");

    listItem.classList.add("Lista-item");
    botonEliminar.textContent = "x";
    botonEliminar.id = "boton-eliminar";
    botonEliminar.addEventListener("click", onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);
    return listItem        
}

function onClickDelete(){
    this.parentNode.remove();
}