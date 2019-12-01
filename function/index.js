"use strict";

const abc = function (a,b,c){
    return a+b+c;
};

const add = function(a, b, c) {
    return a + b + c;
  };

  const result = add(1, 2, 3);
console.log(result);

console.log(add(5, 10, 15));

const fnA = function() {
    console.log('Начала выполняться [fnA]');
    fnB();
    console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
  };
  
  const fnB = function() {
    console.log('Выполняется [fnB]');
  };
  
  console.log('Начал выполнение [main]');
  fnA();
  console.log('Продолжил выполняться [main] после выхода из [fnA]');

  const count = function(countFrom = 0, countTo = 10, step = 1) {
    console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
    for (let i = countFrom; i <= countTo; i += step) {
      console.log(i);
    }
  };

  count(1, 5);
  count(2);
  count(undefined, 5, 2);
  count();

  const sum = function() {
    let total = 0;
  
    for (const argument of arguments) {
      total += argument;
    }
  
    return total;
  };

  console.log(sum(1, 2, 3));
  console.log(sum(1, 2, 3, 4));
  console.log(sum(1, 2, 3, 4, 5));

  const fn = function() {
    const args = Array.from(arguments);
  };

  const fn = function(...args) {
  };

  const withdraw = function(amount, balance) {
    if (amount === 0) {
      console.log('Для проведения операции введите сумму больше нуля.');
    } else if (amount > balance) {
      console.log('Недостаточно средств на счету.');
    } else {
      console.log('Операция снятия средств проведена.');
    }
  };
  
  withdraw(0, 300); 
  withdraw(500, 300); 
  withdraw(100, 300); 

  const withdraw = function(amount, balance) {
    if (amount === 0) {
      console.log('Для проведения операции введите сумму больше нуля.');
      return;
    }
  
    if (amount > balance) {
      console.log('Недостаточно средств на счету.');
      return;
    }
  
    console.log('Операция снятия средств проведена.');
  };
  
  withdraw(0, 300); 
  withdraw(500, 300); 
  withdraw(100, 300); 

  function add(a, b, c) {
    return a + b + c;
  }

  add(1, 2, 3); 
print('text'); 

function add(a, b, c) {
  return a + b + c;
}

function print(str) {
  console.log(str);
}

function fn() {}
const fn = function() {};

// Global scope

function foo() {
    // Local function scope of foo
  
    if (true) {
      // Local block scope
    }
  
    // Local function scope of foo
  
    function bar() {
      // Local function scope of bar
    }
  
    // Local function scope of foo
  }
  
  // Global scope

  const b = 10;

const add = function() {
  const a = 5;

  return a + b;
};

add(); // 15

const value = 50;

const add = function(num) {
  const value = 10;
  const innerValue = 5;

  return num + value + innerValue;
};

// value объявлен глобально и поэтому доступен
console.log(value); // 50

console.log(add(20)); // 35

// Ошибка, переменная innerValue не объявлена в этой области
// видимости, она доступна только внутри фукции add
console.log(innerValue);

console.log('Этого сообщения не будет в консоли.');

cos value = 5;

// Вот поэтому мы используем let или const

console.log(value); // undefined
value = 5;

if (true) {
  console.log(value); // 5
  var value = 10;
  console.log(value); // 10
}

value = 15;
console.log(value); // 15

// В каждой области видимости будет создана своя, независимая переменная value

console.log(value); // ReferenceError: value is not defined
const value = 5;
console.log(value); // 5

if (true) {
  console.log(value); // ReferenceError: value is not defined
  const value = 10;
  console.log(value); // 10
}

console.log(value); // 5

// Обычное функциональное выражение
const add = function(a, b, c) {
    return a + b + c;
  };
  
  // Тоже самое записно как стрелочная функция
  const add = (a, b, c) => a + b + c;

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.
const fn = (a, b, c) => {
    return a + b + c;
  };
  
  // Если параметр один, то он может быть без круглых скобок.
  const fn = x => {
    return x * 2;
  };
  
  // Если параметров нет, то обязательно должны быть пустые круглые скобки.
  const fn = () => {
    console.log('Hello! :]');
  };

  /*
 * Если фигурные скобки после => есть, значит необходимо явно указать то,
 * что должна вернуть функция - поставить return и выражение.
 * Это называется явный возврат (explicit return)
 */
const fn = (a, b, c) => {
    return a + b + c;
  };
  
  /*
   * Если фигурных скобок нет, то возвращается результат выражения стоящего после =>
   * Это называется неявный возврат (implicit return)
   * В примере ниже вернется результат выражения сложения a, b и c
   */
  const fn = (a, b, c) => a + b + c;

  const add = (...args) => {
    console.log(args);
  };
  
  add(1, 2, 3); // [1, 2, 3]