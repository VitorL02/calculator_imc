const form = document.querySelector('#form');


form.addEventListener('submit',function(event){
    event.preventDefault(); // evita o submit do forumulario com dados incompletos
    const inputWeight = event.target.querySelector('.weight');
    const inputHeight = event.target.querySelector('.height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if(!weight ){
        resultImc('Peso Invalido', false);
        return;
    }

    if(!height ){
        resultImc('Altura Invalida', false);
        return;
    }
    
    const imc = getImc(weight,height);
    const level =  imcLevel(imc);

    const msg = `Seu imc é ${imc} (${level})`
    resultImc(msg,true);

});

function imcLevel(imc){
    const level = ['Abaixo do Peso','Peso Normal','SobrePeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];
    if(imc >= 39.9){
        return level[5];
    }if(imc >= 39.9){
        return level[4];
    }
     if(imc >= 29.9){
        return level[3];
    }
     if(imc >= 24.9){
        return level[2];
    }
     if(imc >= 18.5){
        return level[1];
    } if (imc < 18.5){
        return level[0];
    }
}


function getImc(weight,height){
    const imc = (weight / (height ** 2));
    return imc.toFixed(2);

}

function createP(){
    const p = document.createElement('p');
    return p;
}

function resultImc(msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';
    const p = createP();

    if(isValid){
        p.classList.add('result-css-sucess');
    }else{
        p.classList.add('result-css-error');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}