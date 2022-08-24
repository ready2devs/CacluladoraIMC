let weight = document.querySelector("#weight");
let infoWeight = document.querySelector("#infoWeight");
let height = document.querySelector("#height");
let infoHeight = document.querySelector("#infoHeight");
let imcBar = document.querySelector("#imc-bar");
let resultImc = document.querySelector(".result-imc");
let infoExtra = document.querySelector(".info-extra");
let sexMan = document.querySelector("#sex-man");
let sexWoman = document.querySelector("#sex-woman");
let infoTitle = document.querySelector(".info-title");
let btnCalc = document.querySelector("#calculate-imc");
let sex = 1;
iconSex(1);

function mostrarInfoExtra(select){
    switch(select){
        case 1:
            infoExtra.innerHTML = "La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable.";
        break;
        case 2:
            infoExtra.innerHTML = "El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría.";
        break;
        case 3:
            infoExtra.innerHTML = "Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro.";
        break;
        case 4:
            infoExtra.innerHTML = "Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.";
        break;
        case 5:
            infoExtra.innerHTML = "Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.";
        break;
    }
}

function iconSex(select){
    switch(select){
        case 1:
            document.getElementById("sex-man").style.backgroundColor="#04AA6D";
            document.getElementById("sex-woman").style.backgroundColor="rgba(0, 0, 0, 0)";
        break;
        case 2:
            document.getElementById("sex-man").style.backgroundColor="rgba(0, 0, 0, 0)";
            document.getElementById("sex-woman").style.backgroundColor="#04AA6D";
        break;
    }
}

function selectMan(){
    sex = 1;
    iconSex(1);
    return sex;
}

function selectWoman(){
    sex = 2;
    iconSex(2);
    return sex;
}

function calcImc(){
    let result = weight.value / (height.value * height.value);

    document.getElementById("information-on").style.display = "block";
    document.getElementById("information-off").style.display = "none";

    if(sex==1){
        if(result < 20){
            infoTitle.innerHTML = "Condición Desnutrición";
            resultImc.innerHTML = "Sexo: Masculino - IMC: " + result.toFixed(2);
            mostrarInfoExtra(1);
            imcBar.value = (result);
        }else{
            if(result > 20 && result < 24.9){
                infoTitle.innerHTML = "Condición Normal";
                resultImc.innerHTML = "Sexo: Masculino - IMC: " + result.toFixed(2);
                mostrarInfoExtra(2);
                imcBar.value = (result+20);
            }else{
                if(result > 25 && result < 29.9){
                    infoTitle.innerHTML = "Condición Sobrepeso";
                    resultImc.innerHTML = "Sexo: Masculino - IMC: " + result.toFixed(2);
                    mostrarInfoExtra(3);
                    imcBar.value = (result+25);
                }else{
                    if(result > 30 && result < 40){
                        infoTitle.innerHTML = "Condición Obesidad";
                        resultImc.innerHTML = "Sexo: Masculino - IMC: " + result.toFixed(2);
                        mostrarInfoExtra(4);
                        imcBar.value = (result+30);
                    }else{
                        if(result > 40){
                            infoTitle.innerHTML = "Condición Obesidad Grave";
                            resultImc.innerHTML = "Sexo: Masculino - IMC: " + result.toFixed(2);
                            mostrarInfoExtra(5);
                            imcBar.value = (result+40);
                        }
                    }
                }
            }
        }
        return result;
    }
    if(sex==2){
        if(result < 19){
            infoTitle.innerHTML = "Condición Desnutrición";
            resultImc.innerHTML = "Sexo: Femenino - IMC: " + result.toFixed(2);
            mostrarInfoExtra(1);
            imcBar.value = (result);
        }else{
            if(result > 19 && result < 23){
                infoTitle.innerHTML = "Condición Normal";
                resultImc.innerHTML = "Sexo: Femenino - IMC: " + result.toFixed(2);
                mostrarInfoExtra(2);
                imcBar.value = (result+20);
            }else{
                if(result > 24 && result < 27){
                    infoTitle.innerHTML = "Condición Sobrepeso";
                    resultImc.innerHTML = "Sexo: Femenino - IMC: " + result.toFixed(2);
                    mostrarInfoExtra(3);
                    imcBar.value = (result+25);
                }else{
                    if(result > 27 && result < 32){
                        infoTitle.innerHTML = "Condición Obesidad";
                        resultImc.innerHTML = "Sexo: Femenino - IMC: " + result.toFixed(2);
                        mostrarInfoExtra(4);
                        imcBar.value = (result+30);
                    }else{
                        if(result > 32){
                            infoTitle.innerHTML = "Condición Obesidad Grave";
                            resultImc.innerHTML = "Sexo: Femenino - IMC: " + result.toFixed(2);
                            mostrarInfoExtra(5);
                            imcBar.value = (result+40);
                        }
                    }
                }
            }
        }
        return result;
    }
}

weight.oninput = () => {
    infoWeight.innerHTML = weight.value;
}

height.oninput = () => {
    infoHeight.innerHTML = height.value;
}

document.getElementById("information-on").style.display = "none";

sexMan.onclick = selectMan;
sexWoman.onclick = selectWoman;

btnCalc.onclick = calcImc;
