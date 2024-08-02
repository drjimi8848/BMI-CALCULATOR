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
        return 'Underweight,\n you should eat a variety of foods that give you the nutrition you need.';
    } else if (bmi <= 24.9) {
        return 'Normal weight,\n you have a Perfect Body.';
    } else if (bmi < 30) {
        return 'Overweight,\n You need to eat a healthy, reduced-calorie diet and exercise regularly.';
    } else {
        return 'Obese,\n You need to change your lifestyle. Eat healthy, do exercise and stay happy and stress free';
    }
}
