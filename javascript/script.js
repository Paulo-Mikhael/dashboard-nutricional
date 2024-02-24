function dashboardConfigure(){
    const empty = document.querySelector('#void');
    const userImcDashboard = document.querySelector('#user-imc-dashboard');
    const imcValue = document.querySelector('#imc-value');
    const waterValue = document.querySelector('#water-value');
    const userImcValue = document.querySelector('#user-imc');
    const infoCaloriesValue = document.querySelector('#info-calories');

    let userWeight = document.querySelector('#user-weight').value;
    let userHeight = document.querySelector('#user-height').value;

    // Converte as strings para números
    userWeight = parseFloat(userWeight);
    userHeight = parseFloat(userHeight);

    if (!userWeight || !userHeight || isNaN(userWeight) || isNaN(userHeight)){
        alert('Insira valores numéricos');
        empty.classList.add('open')
        empty.classList.remove('close')
        userImcDashboard.classList.add('close')
        userImcDashboard.classList.remove('open')
    }
    else{
        empty.classList.remove('open')
        empty.classList.add('close')
        userImcDashboard.classList.remove('close')
        userImcDashboard.classList.add('open')
        // Calcula o IMC
        waterValue.textContent = userHeight * 35 + ' Litros';
        const imc = userWeight / (userHeight * userHeight);
        let userImc = '';
        let userCalories = 0;
        if (imc < 18.5){
            userImc = 'Você está abaixo do peso adequado para uma pessoa com esse índice de massa corporal';
            userCalories = 30
        }
        else if (imc >= 18.5 && imc <= 24.9){
            userImc = 'Você está no peso adequado para uma pessoa com esse índice de massa corporal'
            userCalories = 30
        }
        else if (imc >= 25 && imc <= 29.9){
            userImc = 'Fique atento! De acordo com seu índice de massa corporal você está com sobrepeso'
            userCalories = 25
        }
        else if (imc >= 30 && imc <= 34.9){
            userImc = 'Cuidado! De acordo com seu índice de massa corporal você está com Obesidade grau 1'
            userCalories = 22
        }
        else if (imc >= 35 && imc <= 39.9){
            userImc = 'Cuidado! De acordo com seu índice de massa corporal você está com Obesidade grau 2'
            userCalories = 22
        }
        else if (imc > 40){
            userImc = 'Cuidado! De acordo com seu índice de massa corporal você está com Obesidade grau 3'
            userCalories = 22
        }

        infoCaloriesValue.textContent = (userWeight * userCalories) + 'mg';

        userImcValue.textContent = userImc;

        // Exibe o resultado do IMC
        console.log(imc);
        imcValue.textContent = imc.toFixed(2); // Exibe o IMC com duas casas decimais
    }
}
