"use strict";

// // Solicitud de abrir un IDBfactory para bases de datos indexada de objetos almacenados 
// const IDBRequest = indexedDB;

// Para abrir un request. La busca, si no existe la crea
const IDBRequest = indexedDB.open("crudDB", 1);
// console.log(IDBRequest);

// Para indicar que hacer si no está creada.
// Solo si no esta creada se pueden crear los almacenes de objetos. el último parámetro es la llave que debe ser única
IDBRequest.addEventListener("upgradeneeded", () => {
    // console.log("No estaba creada pero ya se creó correctamente");
    const db = IDBRequest.result;
    db.createObjectStore("nombre", {
        autoIncrement: true
    });
})

IDBRequest.addEventListener("success", () => {
    // console.log("apertura correcta");
    readObjetos();
})

IDBRequest.addEventListener("error", () => {
    console.log("Ha ocurrido un error al abrir la base de datos");
})

// // Adicionar elemneto desde el HTML
// document.getElementById(`add`).addEventListener("click", ()=>{
//     let name = document.getElementById("name").value;
//     if (name.length > 0){
//         if(document.querySelector(".possible") != undefined){
//             if(confirm("Hay elementos sin guardar: Quiere continuar?"))
//             addObjeto({nombre:name});
//             document.querySelector(".add-name").innerHTML = "";
//             readObjetos();
// //----------------- 6:05:24 -----------------------------
//         }else{
//             addObjeto({nombre:name});
//             document.querySelector(".add-name").innerHTML = "";
//             readObjetos();
//         }
//     }
// }) 

const addObjeto = objeto => {
    // const db = IDBRequest.result;
    // const IDBtransaccion = db.transaction("nombre", "readwrite");
    // const objectStore = IDBtransaccion.objectStore("nombre");
    // objectStore.add(objeto);
    // IDBtransaccion.addEventListener("complete",()=>{
    const IDBData = getIDBData("readwrite",`objeto:[${objeto.nombre}] agregado correctamente`);
    IDBData.add(objeto);
    // IDBData[1].addEventListener("complete", () => {
    //     console.log("objeto:[" + objeto.nombre + "] agregado correctamente");
    // })
}

const readObjetos = objeto => {
    // const db = IDBRequest.result;
    // const IDBtransaccion = db.transaction("nombre", "readonly");
    // const objectStore = IDBtransaccion.objectStore("nombre");
    // const cursor = objectStore.openCursor();
    const IDBData = getIDBData("readonly","todos los datos fueron leídos");
    const cursor = IDBData.openCursor();
    // incluído para enviar los elementos leídos
    const fragment = document.createDocumentFragment();
    // resetear la pantalla de la lista en blanco
    // document.querySelector(".names").innerHTML = "";
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let elemento = namesHTML(cursor.result.key, cursor.result.value);
            // a cada fragmento agrega el elementos leídos
            fragment.appendChild(elemento);
            // console.log(cursor.result.value);
            cursor.result.continue();
        }
        //  else console.log("todos los datos fueron leídos");
            // al final pega el fragmento al documento
            else document.querySelector(".names").appendChild(fragment);
    })
}

const modifieObjeto = (key, objeto) => {
    // const db = IDBRequest.result;
    // const IDBtransaccion = db.transaction("nombre", "readwrite");
    // const objectStore = IDBtransaccion.objectStore("nombre");
    const IDBData = getIDBData("readwrite",`objeto:[${objeto.nombre}] modificado correctamente`);
    IDBData.put(objeto, key);
    // objectStore.put(objeto, key);
    // IDBtransaccion.addEventListener("complete", () => {
    //     // Si la clave no existe la crea
    //     console.log("objeto:[" + objeto.nombre + "] modificado correctamente");
    // })
}

const deleteObjeto = (key) => {
    // const db = IDBRequest.result;
    // const IDBtransaccion = db.transaction("nombre", "readwrite");
    // const objectStore = IDBtransaccion.objectStore("nombre");
    const IDBData = getIDBData("readwrite",`objeto: [${key}] eliminado correctamente`);
    IDBData.delete(key);
    // objectStore.delete(key);
    // IDBtransaccion.addEventListener("complete",()=>{
    // // Si la clave no existe la crea
    //     console.log("objeto: eliminado correctamente");
    // })
}

const getIDBData = (mode, msg) => {
    const db = IDBRequest.result;
    // const IDBtransaccion = db.transaction("nombre", "readwrite");
    const IDBtransaccion = db.transaction("nombre", mode);
    const objectStore = IDBtransaccion.objectStore("nombre");
    IDBtransaccion.addEventListener("complete", () => {
        console.log(msg);
    })
    return objectStore;
}

const namesHTML = (id,name) => {
    
    const allNames = document.createElement("DIV");
    const addName = document.createElement("DIV");
    const inputName = document.createElement("INPUT");
    // const addOption = document.createElement("DIV");
    const addButton = document.createElement("button");
    const names = document.createElement("DIV");

    const container = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    allNames.classList.add("all-name");
    addName.classList.add("add-name");
    names.classList.add("names");
    inputName.classList.add("name");
    addButton.classList.add("add");

    container.classList.add("name");
    options.classList.add("opttions");
    saveButton.classList.add("impossible");
    deleteButton.classList.add("delete");

    // <div class="add-name">
    // <input type="text" id="name" placeholder="Introduce un nombre">
    // <button id="add">Añadir

    inputName.textPlaceholder = "Introduce un nombre";
    addButton.textContent = "Añadir";

    saveButton.textContent = "Guardar";
    deleteButton.textContent ="Eliminar";

    inputName.setAttribute("apellcheck","false");

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    // addOption.appendChild(addButton);
    container.appendChild(h2);

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=> {
        saveButton.classList.replace("impossible","possible");
    });

    addButton.addEventListener("click",() => {
        addObjeto(name);
    })    

    // addButton.getElementById(`add`).addEventListener("click", () => {
    //     let name = document.getElementById("name").value;
    //     if (name.length > 0) {
    //         if (document.querySelector(".possible") != undefined) {
    //             if (confirm("Hay elementos sin guardar: Quiere continuar?"))
    //                 addObjeto({ nombre: name });
    //             document.querySelector(".add-name").innerHTML = "";
    //             readObjetos();
    //             //----------------- 6:05:24 -----------------------------
    //         } else {
    //             addObjeto({ nombre: name });
    //             document.querySelector(".add-name").innerHTML = "";
    //             readObjetos();
    //         }
    //         // addObjeto(name);
    //     }
    // })

    saveButton.addEventListener("click", ()=>{
        if (saveButton.className == "possible"){
            modifieObjeto(id,{nombre: h2.textContent});
            saveButton.classList.replace("possible","impossible");
        }
    })

    deleteButton.addEventListener("click",() => {
        deleteObjeto(id);
        document.querySelector(".names").removeChild(container);
    })    

    allNames.appendChild(addName);
    allNames.appendChild(container);

    return container;
}