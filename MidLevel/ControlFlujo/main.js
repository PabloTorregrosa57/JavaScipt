const sendButton = document.getElementById('snd-note');

sendButton.addEventListener("click",()=>{
    let result, message;
    try {
        let prevResult = parseInt(document.getElementById('note').value);
        if(isNaN(prevResult)){
            throw "Gracioso";
        }
        message = defineMessage(prevResult);
        result = verifieAprobation(8,5,prevResult);
    } catch (error) {
        result = "¿SOS GRACIOSO?";
        message = "He descubierto que intentaste hackear el sitio";
    }
    openModal(result, message);
})

const defineMessage = (pR)=>{
    let result;
    switch (pR) {
        case 1: result = "Vago";
        break;
        case 2: result = "Repelotudo";
        break;
        case 3: result = "Pelotudo";
        break;
        case 4: result = "Insuficiente esfuerzo";
        break;
        case 5: result = "Mal";
        break;
        case 6: result = "Aguanta pero puede mejorar";
        break;
        case 7: result = "Aguanta";
        break;
        case 8: result = "¡Muy bien!";
        break;
        case 9: result = "¡Insuperable!";
        break;
        case 10: result = "Sobrado";
        break;
        default: result = null;
    }
    return result;
}

const verifieAprobation = (note1,note2,pR)=>{
    promedio = (note1 + note2 + pR) / 3;
    if(promedio >= 7){
        return ["<span class='green'> APROBADO</span>", promedio];
    }
    return ["<span class='red'> LLEVADO</span>", promedio];

}

const openModal = (res, msg)=>{
    // console.log(res);
    // console.log(msg);
    document.querySelector(".result").innerHTML = res[0];
    document.querySelector(".message").innerHTML = " Tu promedio: " + res[1] +" "+ msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}