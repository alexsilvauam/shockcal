function calcularCalorias() {
    const peso =parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const edad = parseInt(document.getElementById("edad").value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const actividad = document.getElementById("actividad").value;

    let factorActividad;
    switch (actividad) {
        case "sedentario":
            factorActividad = 1.2;
            break;
        case "ligero":
            factorActividad = 1.375;
            break;
        case "moderado":
            factorActividad = 1.55;
            break;
        case "intenso":
            factorActividad = 1.725;
            break;
        case "muy-intenso":
            factorActividad = 1.9;
            break;
        default:
            factorActividad = 1.2; // Por defecto
    }

    let tmb;
    if (genero === "masculino") {
        tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }
    const mantenimiento = MathRound (tmb * factorActividad);
    const perdidaGrasa = MathRound (mantenimiento - 500);
    const gananciaMusculo = MathRound (mantenimiento + 500);

    document.getElementById("mantenimiento").textContent = `Calorías de mantenimiento: ${mantenimiento} kcal`;
    document.getElementById("perdidaGrasa").textContent = `Calorías para pérdida de grasa: ${perdidaGrasa} kcal`;
    document.getElementById("gananciaMusculo").textContent = `Calorías para ganancia de músculo: ${gananciaMusculo} kcal`;

    document.getElementById("resultados").style.display = "block";


}