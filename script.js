const form = document.getElementById('bmi-form');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight && height) {
        const bmi = calculateBMI(weight, height);
        const resultText = getResultText(bmi);
        resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)} (${resultText})`;
    } else {
        resultElement.textContent = 'Please enter valid weight and height values.';
    }
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getResultText(bmi) {
    if (bmi < 18.5) {
        return 'Underweight, BHAT KHAU HAI';
    } else if (bmi < 25) {
        return 'Normal weight, PERFECT BODY';
    } else if (bmi < 30) {
        return 'Overweight, ALI KAM KHAU';
    } else {
        return 'Obese, DERAI KAM KHAU';
    }
}