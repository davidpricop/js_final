// FORMS IMPUTS

function addInputText() {
        var addCampoTxt = document.getElementById("addCampoTxt");
        addCampoTxt.addEventListener("click",function(){	

        let valueName = prompt("Introduce el nombre para el name del input: ");
        if(valueName == undefined){
        } else {
            let valuePlaceholder = prompt("Introduce el placeholder para el input");
            if(valuePlaceholder == undefined){
            } else {
                let valueRequired = prompt("¿Quieres poner este campo como obligatorio?");
                    if(valueRequired.toLowerCase() == "si") {
                        let campoTxt = document.getElementById("campoTxt");
                        campoTxt.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" required>`);  
                    } else {
                        let campoTxt = document.getElementById("campoTxt");
                        campoTxt.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" >`);  
                    }
                }
            }
        });
}

function addInputNumber() {
    var addCampoNumber = document.getElementById("addCampoNumber");
    addCampoNumber.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el name del input: ");
    if(valueName == undefined){
    } else {
        let valuePlaceholder = prompt("Introduce el placeholder para el input");
        if(valuePlaceholder == undefined){
        } else {
                let valueRequired = prompt("¿Quieres poner este campo como obligatorio?");
                    if(valueRequired.toLowerCase() == "si") {
                        let campoNumber = document.getElementById("campoNumber");
                        campoNumber.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" required>`);
                    } else {
                        let campoNumber = document.getElementById("campoNumber");
                        campoNumber.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" >`);
                    }
                }
            }
    });
}

function addInputEmail() {
    var addCampoEmail = document.getElementById("addCampoEmail");
    addCampoEmail.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el name del input: ");
    if(valueName == undefined){
    } else {
        let valuePlaceholder = prompt("Introduce el placeholder para el input");
        if(valuePlaceholder == undefined){
        } else {
            let valueRequired = prompt("¿Quieres poner este campo como obligatorio?");
                if(valueRequired.toLowerCase() == "si") {
                    let campoEmail = document.getElementById("campoEmail");
                    campoEmail.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" required>`);
                } else {
                    let campoEmail = document.getElementById("campoEmail");
                    campoEmail.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueName}</label><input type="text" name"${valueName}" placeholder="${valuePlaceholder}" >`);
                }
            }
        }
        
    });
}

function addInputSelect() {
    var addCampoListSelect = document.getElementById("addCampoListSelect");
    addCampoListSelect.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el name del select: ");
    if(valueName == undefined){
    } else {
        let valueOption = [];
        var i;
        do {
            if (valueOption.length == 0 || conti == "si"){
                valueOption.push(prompt("Valor de la opción: "));

                var conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                if(conti.toLowerCase() == "si"){
                    valueOption.push(prompt("Valor de la opción: "));

                    conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                }else if (conti.toLowerCase == "no"){
                    break;
                }
            }
        } while (conti.toLowerCase() == "si");
    
            let campoListSelect = document.getElementById("campoListSelect");
            campoListSelect.insertAdjacentHTML("beforeend", `<select id="${valueName}" name="${valueName}"></select>`);
            var contenedorLista = document.getElementById(`${valueName}`);
            for (let i = 0; i < valueOption.length; i++) {  
                contenedorLista.insertAdjacentHTML("beforeend", `<option value="${valueOption[i]}">${valueOption[i]}</option>`); 
            }
        }
        
    }); 
}

function addInputCheckbox() {
    var addCampoListCheckbox = document.getElementById("addCampoListCheckbox");
    addCampoListCheckbox.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el name del checkbox: ");
    if(valueName == undefined){
    } else {
        let valueCheckbox = [];
        var i;
        do {
            if (valueCheckbox.length == 0 || conti == "si"){
                valueCheckbox.push(prompt("Valor de la opción: "));

                var conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                if(conti.toLowerCase() == "si"){
                    valueCheckbox.push(prompt("Valor de la opción: "));

                    conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                }else if (conti.toLowerCase == "no"){
                    break;
                }
            }
        } while (conti.toLowerCase() == "si");
    
            let campoListCheckbox = document.getElementById("campoListCheckbox");
            for (let i = 0; i < valueCheckbox.length; i++) {  
                campoListCheckbox.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueCheckbox[i]}<input type="checkbox" value="${valueCheckbox[i]}" name="${valueName}">`); 
                }
        }   
    });    
}

function addInputRadio() {
    var addCampoListRadio = document.getElementById("addCampoListRadio");
    addCampoListRadio.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el name del select: ");
    if(valueName == undefined){
    } else {
        let valueRadio = [];
        var i;
        do {
            if (valueRadio.length == 0 || conti == "si"){
                valueRadio.push(prompt("Valor de la opción: "));

                var conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                if(conti.toLowerCase() == "si"){
                    valueRadio.push(prompt("Valor de la opción: "));

                    conti = prompt("Quieres meter otro valor? (Responde Si o No): ");
                }else if (conti.toLowerCase == "no"){
                    break;
                }
            }
        } while (conti.toLowerCase() == "si");
    
            let campoListRadio = document.getElementById("campoListRadio");
            for (let i = 0; i < valueRadio.length; i++) {  
                campoListRadio.insertAdjacentHTML("beforeend",`<label for="${valueName}">${valueRadio[i]}<input type="radio" value="${valueRadio[i]}" name="${valueName}">`); 
                }
        }
    });    
}

function addFormSubmit() {
    var addSubmit = document.getElementById("addSubmit");
    addSubmit.addEventListener("click",function(){	

    let valueName = prompt("Introduce el nombre para el botón de enviar");
    if(valueName == undefined){
    } else {
        let botonSubmit = document.getElementById("botonSubmit");
        botonSubmit.insertAdjacentHTML("beforeend",`<input type="submit" value="${valueName}" >`);
        }
    });
}

addInputText();
addInputNumber();
addInputEmail();
addInputSelect();
addInputCheckbox();
addInputRadio();
addFormSubmit();
