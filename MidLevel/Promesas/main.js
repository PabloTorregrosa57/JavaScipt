const mattersHTML = document.querySelector(".matters");

// Supuesto servidor
const matters = [
    {
        nameMatter:"Física 4",
        note: 7
    },{
        nameMatter:"Cálculo 3",
        note: 8
    },{
        nameMatter:"Bases de Datos 3",
        note: 9
    },{
        nameMatter:"Matemáticas discretas",
        note: 8   
    },{
        nameMatter:"Programación 4",
        note: 7   
    }
];

const selectMatter = (id)=>{
    return new Promise((resolve,reject)=>{
        matter = matters[id];
        if (matter == undefined) reject("Materia inexistente");
// Supuesto tiempo de respuesta del servidor
        // No simula consulta a un servidor por que no se está pasando como parámetro
        // else setTimeout(resolve(matter),Math.random()*400);
        // se debe crear una función y pasarlo como parámetro
        else setTimeout(()=>{resolve(matter)},Math.random()*500);
    })
}

// // for (let idMatter = 0; idMatter > matters.length; idMatter++) {
// for (idMatter in matters){
//     selectMatter(idMatter).then(res => console.log(res));    
// }

// va a tomar siempre la primera materia
// const returnMaterias = async()=>{
//     let matter = [];
//     for (let idMatter = 0; idMatter < matters.length; idMatter++){
//         matter[idMatter] = selectMatter(idMatter);
//         matter[idMatter].then(mat => console.log(mat));    
//     }            
// }


// se debe asignar el await que obliga a esperar hasta que se ejecuten en orden del índice y no se requiere el then
// // se debe asignar el await que obliga a esperar hasta que se ejecuten en orden del índice y no se requiere el then
// const returnMaterias = async()=>{
//     let matter = [];
//     for (let idMatter = 0; idMatter < matters.length; idMatter++){
//         matter[idMatter] = await selectMatter(idMatter);
//         console.log(matter[idMatter]);   
//     }            
// }

const returnMaterias = async()=>{
    let matter = [];
    for (let idMatter = 0; idMatter < matters.length; idMatter++){
        matter[idMatter] = await selectMatter(idMatter);
        let newHTMLCode = `
        <div class="matter">
            <div class="nameMatter">${matter[idMatter].nameMatter}</div>
            <div class="note">${matter[idMatter].note}</div>
        </div>`;
        mattersHTML.innerHTML += newHTMLCode;
    }            
}

returnMaterias();
