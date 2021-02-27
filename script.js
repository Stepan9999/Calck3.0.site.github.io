const firstNumberInputEl = document.getElementById('first_num');
const secondNumberInputEl = document.getElementById('second_num');
const operationSelectEl = document.getElementById('select_operation');
const pushResultBtnEl = document.getElementById('button');
const resultListEl = document.getElementById('list_result');
const liTemplate = document.getElementById('li-template').innerHTML;

pushResultBtnEl.addEventListener('click', onResultCreate);

const resultSum = (a, b) => a + b;
const resultDiff = (a, b) => a - b;
const resultMult = (a, b) => a * b;

function onResultCreate() {
  const firstNumber = +firstNumberInputEl.value;
  const secondNumber = +secondNumberInputEl.value;
  const operand = operationSelectEl.value;
  if (firstNumberInputEl.value !== "" && secondNumberInputEl.value !== ""){
    switch (operand) {
      case '+':
        result = resultSum(firstNumber, secondNumber);
        break
      case '-':
        result = resultDiff(firstNumber, secondNumber);
        break
      case '*':
        result = resultMult(firstNumber, secondNumber);
        break
  };
  }else{
    alertError();
    return
  };
  
  pushResult (firstNumber, secondNumber, operand, result)
};

function pushResult (op1, op2, operation, res){
  const taskEl = document.createElement('li');   
  taskEl.innerHTML = liTemplate
  .replace('{{firstOperand}}', op1)
  .replace('{{option}}', operation)
  .replace('{{secondOperand}}', op2)
  .replace('{{result}}', res);
  resultListEl.append(taskEl);
  firstNumberInputEl.value = '';
  secondNumberInputEl.value = '';
};
function alertError (){
  alert('Введите значения');
};