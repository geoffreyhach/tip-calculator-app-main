
let tipBtns = document.querySelectorAll('.tip');
let customTipBtn = document.querySelector('.custom-tip');
let billInput = document.getElementById('bill');
let peopleNumberInput = document.getElementById('people');
let totalPerPerson = document.querySelector('.total-per-person-result');
let tipPerPerson = document.querySelector('.tip-per-person-result');
let error = document.querySelector('.error');
let resetBtn = document.querySelector('.reset');


billInput.value = 0.0
peopleNumberInput.value = 1;

let billValue = 0.0;
let peopleNumber = 1;
let tip = 1;
window.onload = calculate();

tipBtns.forEach(el => {
    el.addEventListener('click', () => {
        
        customTipBtn.classList.remove('active-custom');
        tipBtns.forEach(el => el.classList.remove('active'))
        el.classList.add('active')
    });
});

customTipBtn.addEventListener('click', () => {
    tipBtns.forEach(el => el.classList.remove('active'));
    customTipBtn.value="";
    customTipBtn.classList.add('active-custom');
    
});

billInput.addEventListener('input', () => {
    billValue = billInput.value;
    calculate()
});


peopleNumberInput.addEventListener('input', () => {
    peopleNumber = peopleNumberInput.value;
    if (peopleNumber < 1)  {
        error.style.display = "block";
        peopleNumberInput.style.outline = "2px solid red";
    }
    else {
        error.style.display = "none";
        peopleNumberInput.style.outline = "none";
        calculate()
    }
});

tipBtns.forEach(el => {
    el.addEventListener('click', () => {
        tip = (1 + el.value/100);
        calculate();
    })

})

customTipBtn.addEventListener('input', () => {
    tip = (1 + customTipBtn.value/100);
    console.log(tip);
    calculate()
});

function calculate() {
    let tipTotal = ((tip - 1) * billValue) / peopleNumber
    tipPerPerson.innerHTML = tipTotal.toFixed(2);
    let total = (billValue * tip) / peopleNumber ;
    totalPerPerson.innerHTML = total.toFixed(2);

    if (total.toString().replace('.', '').length > 4) totalPerPerson.style.fontSize='1.5rem';
    if (total.toString().replace('.', '').length > 8) totalPerPerson.style.fontSize='1rem';
    if (tipTotal.toString().replace('.', '').length > 4) tipPerPerson.style.fontSize='1.5rem';
    if (tipTotal.toString().replace('.', '').length > 8) tipPerPerson.style.fontSize='1rem';
}


resetBtn.addEventListener('click', () => {
    billInput.value = 0.0;
    peopleNumberInput.value = 1
    tip = 1;
    billValue = 0.0;
    peopleNumber = 1;
    customTipBtn.value=""
    
    tipBtns.forEach(el => el.classList.remove('active'));
    calculate();

})



