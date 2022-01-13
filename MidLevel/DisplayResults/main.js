let pupils = [{
    namePupil: "nombre de prueba",
    email: "email@de.prueba",
    signature: "materia de prueba"
},
{
    namePupil: "nombre de prueba2",
    email: "email@de.prueba2",
    signature: "materia de prueba2"
},
{
    namePupil: "nombre de prueba3",
    email: "email@de.prueba3",
    signature: "materia de prueba3"
},
{
    namePupil: "nombre de prueba4",
    email: "email@de.prueba4",
    signature: "materia de prueba4"
}];
const button = document.querySelector(".confirmButton");
const contenedor =document.querySelector(".grid-container");

let htmlCode = "";

for (pupil in pupils) {
    // for(dato in pupils[pupil]){
    //     console.log(pupils[pupil][dato]);
    // }
    let facts = pupils[pupil];
    let namePupil = facts["namePupil"];
    let email = facts["email"];
    let signature = facts["signature"];
    htmlCode += `
    <div class="grid-item name">${namePupil}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${signature}</div>
    <div class="grid-item week">
        <select class="selectedWeek">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
}
contenedor.innerHTML = htmlCode;

button.addEventListener("click", () => {
    let confirmTables = confirm("¿Realmente desea confirmar las mesas?");
    if (confirmTables) {
        document.body.removeChild(button);
        let elements = document.querySelectorAll(".week");
        let selectedWeeks = document.querySelectorAll(".selectedWeek");
        for (element in elements) {
            week = elements[element];
            // week.innerHTML = document.querySelectorAll(".selectedWeek")[element].value;
            week.innerHTML = selectedWeeks[element].value;
        }
    }
})