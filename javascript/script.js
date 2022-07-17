const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep,nextStep)
{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }
    else
    {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';


    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

function validate()
{
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = 'none'
    altura.style.border = 'none'

    if(!peso.value || !altura.value)
    {
        if(!peso.value && !altura.value)
        {
            peso.style.border = '1px solid #ff0000'
            altura.style.border = '1px solid #ff0000'
        }
        else if(!peso.value)
        {
            peso.style.border = '1px solid #ff0000'
        }
        else
        {
            altura.style.border = '1px solid #ff0000'
        }
    }
    else
    {
        let imc = peso.value / (altura.value * altura.value);
        const result = document.getElementById('resultado')
        
        if(imc < 18.5)
        {
            console.log('Magreza  |  Obesidade 0');
            result.innerHTML = 'Magreza  |  Obesidade 0'
            result.style.color = '#ff0000'
        }

        else if(imc >= 18.5 && imc < 25)
        {
            console.log('Normal  |  Obesidade 0');
            result.innerHTML = 'Normal  |  Obesidade 0'
            result.style.color = '#4ab900'
        }

        else if(imc >= 25 && imc < 30)
        {
            console.log('Sobrepeso  |  Obesidade 1');
            result.innerHTML = 'Sobrepeso  |  Obesidade 1'
            result.style.color = '#ffd900'
        }

        else if(imc >= 30 && imc < 40)
        {
            console.log('Obesidade  |  Obesidade 2');
            result.innerHTML = 'Obesidade  |  Obesidade 2'
            result.style.color = '#ff7b00'
        }

        else{
            console.log('Obesidade  |  Obesidade 3');
            result.innerHTML = 'Obesidade  |  Obesidade 3'
            result.style.color = '#ff0000'
        }

        go(2,3);
    }
}