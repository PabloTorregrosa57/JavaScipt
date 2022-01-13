const nameUser = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const button = document.getElementById("sendButton");

const result = document.querySelector(".result");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let error = verifieFields();
    let subestring = email.value.substring(
        email.value.indexOf("@"),
        email.value.length);
    console.log(`email: ${email.value.indexOf("@")} Substring:${subestring} punto:${subestring.indexOf(".")}`);
    if (error[0]) {
        // document.querySelector("result").innerHTML = error[1];
        result.innerHTML = error[1];
        result.classList.add("red");
    } else {
        result.innerHTML = "Solicitud enviada correctamente";
        result.classList.add("green");
        result.classList.remove("red");
    }
})

const verifieFields = () => {
    let error = [];
    error[0] = false;
    if (errorLenght(nameUser.value, "Nombre", 5, 40)[0]) {
        error = errorLenght(nameUser.value, "Nombre", 5, 40);
        return error;
    } else
        if (errorEmail()[0]) {
            error = errorEmail();
            return error;
        } else
            if (errorLenght(course.value, "Curso", 4, 40)[0]) {
                error = errorLenght(course.value, "Curso", 5, 40);
                return error;
            }
    return error;

}

function errorLenght(string, campo, minLength, maxLenght) {
    let error = [];
    error[0] = false;
    if (string.length < minLength) {
        error[0] = true;
        error[1] = "El campo: " + campo + " debe contener mas de " + minLength + " caracteres";
        return error;
    } else
        if (string.length > maxLenght) {
            error[0] = true;
            error[1] = "El campo: " + campo + " debe contener menos de " + maxLenght + " caracteres";
            return error;
        }
    return error;
}

function errorEmail() {
    let error = [];
    error[0] = false;
    if(errorLenght(email.value, "e_mail", 7,320)[0]){
        error = errorLenght(email.value, "e_mail", 7,320);
        return error;
    }else
    if (email.value.indexOf("@") == -1) {
        error[0] = true;
        error[1] = "El email debe contener @";
        return error;
    }
    else 
    if (
        email.value.indexOf("@") > 64) {
        error[0] = true;
        error[1] = "Longitud antes del @ mayor a 64";
        return error;
    }
    else 
    if (email.value.length - email.value.indexOf("@") > 255
    ) {
        error[0] = true;
        error[1] = "Longitud despues del @ mayor a 255";
        return error;
    }
    else 
    if (email.value.indexOf(" ") !== -1) {
        error[0] = true;
        error[1] = "El email no debe contener espacios";
        return error;
    }
    else 
    {
        let subestring = email.value.substring(
            email.value.indexOf("@"),
            email.value.length);
        if (subestring.indexOf(".") == -1) {
            error[0] = true;
            error[1] = "El email debe contener un punto despues del @";
            return error;
        } else if (subestring.length < subestring.indexOf(".") + 3) {
            error[0] = true;
            error[1] = "El email debe tener almenos dos caracteres despues del punto";
            return error;
        } else if (subestring.indexOf(".") < 3) {
            error[0] = true;
            error[1] = "El email debe tener almenos dos caracteres antes del punto";
            return error;
        }
    }
    return error;
}

