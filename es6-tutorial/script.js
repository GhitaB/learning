"use strict";

// ----------------------------------------------------------------------------
//   ES6 Tutorial: Learn Modern JavaScript in 1 Hour - Programming with Mosh
//   https://youtu.be/NCwa_xi0Uuc
// ----------------------------------------------------------------------------



// var, let, const ============================================================
// ----------------------------------------------------------------------------
// const -> block
// let   -> block
// var   -> function

// ----------------------------------------------------------------------------
function sayHello() {
  for (var i = 0; i < 5; i++) {
  //for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // 5, în cazul var i
                  // i is not defined, în cazul let i
}

sayHello();

// ----------------------------------------------------------------------------
const x = 1;
// x = 2; // Assignment to constant variable.
//
// Folosește const, iar let doar când trebuie să reasignezi o variabilă.



// Objects ====================================================================
// ----------------------------------------------------------------------------
const person = {
  name: 'Mosh',
  // walk: function() {},
  walk() {},
  talk() {}
};

person.talk();
person.name = ''; // în mod obișnuit așa accesăm

person['name'] = 'John'; // dar se poate și așa
const targetMember = 'name';
person[targetMember] = 'John'; // folosim când accesăm dinamic un câmp
// ----------------------------------------------------------------------------



// The this keyword ===========================================================
// ----------------------------------------------------------------------------
const person1 = {
  name: 'Nume',
  walk() {
    console.log(this);
  }
}

person1.walk(); // {name: 'Nume', walk: ƒ}
const walk = person1.walk;
walk(); // this este window. Sau undefined dacă setăm strict mode
// Spre deosebire de alte limbaje de programare, valoarea lui this depinde de
// modul în care este apelată funcția. Dacă o apelăm ca metodă a unui obiect,
// atunci this va returna întotdeauna o referință la acel obiect. Totuși, dacă
// apelezi funcția ca un obiect de sine stătător sau în afara unui obiect, this
// va returna obiectul global care este window.
// ----------------------------------------------------------------------------



// Binding this ===============================================================
// ----------------------------------------------------------------------------
// În javascript funcțiile sunt obiecte.
const walk1 = person1.walk.bind(person1);
walk1(); // nu mai dă undefined, ci {name: 'Nume', walk: ƒ}
// Am atașat funcția walk de obiectul person. De aceea, chiar dacă apelăm
// funcția walk fără a preciza un obiect, ea rămâne atașată de obiectul person.
// ----------------------------------------------------------------------------



// Arrow Functions ============================================================
// ----------------------------------------------------------------------------
const square = function(number) {
  return number * number;
}

const square1 = (number) => {
  return number * number;
}

const square2 = number => { // poți și fără paranteze pentru singur parametru
  return number * number;
}

const square3 = () => { // poți și fără paranteze pentru singur parametru
  return 3 * 3;
}

const square4 = number => number * number;

console.log(square4(5));
// ----------------------------------------------------------------------------
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
  { id: 4, isActive: true },
];

// const activeJobs = jobs.filter(function(job) { return job.isActive; });
// const activeJobs = jobs.filter((job) => { return job.isActive; });
// const activeJobs = jobs.filter(job => { return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
// ----------------------------------------------------------------------------



// Arrow Functions and this ===================================================
// ----------------------------------------------------------------------------
const person2 = {
  name: 'Nume',
  walk() {
    console.log('this', this); // this {name: 'Nume', walk: ƒ}
    setTimeout(function() {
      console.log('this', this); // this Window, pentru că funcția de aici nu
                                 // e legată de un obiect, ci standalone
    }, 100);
  }
}

// person2.walk();
// ----------------------------------------------------------------------------
// O rezolvare ar fi cu acest self:
const person3 = {
  name: 'Nume',
  walk() {
    var self = this;
    setTimeout(function() {
      console.log('self', self); // afișează obiectul person
    }, 100);
  }
}

// person3.walk();
// ----------------------------------------------------------------------------
const person4 = {
  name: 'Nume',
  walk() {
    setTimeout(() => {
      console.log('this', this); // afișează obiectul person, pentru că
      // arrow function moștenește this din contextul în care codul e definit.
    }, 100);
  }
}

// person3.walk();
// ----------------------------------------------------------------------------



// Array.map() ================================================================
// ----------------------------------------------------------------------------
const colors = ["green", "red", "blue"];
const items = colors.map(function(color) {
  return '<li>' + color + '</li>';
});
console.log(items);

const items1 = colors.map(color => '<li>' + color + '</li>');
console.log(items1);

const items2 = colors.map(color => `<li>${color}</li>`);
console.log(items2);
// ----------------------------------------------------------------------------



// Object Destructuring =======================================================
// ----------------------------------------------------------------------------
const address = {
  street: '',
  city: '',
  country: ''
};

// În mod obișnuit făceam așa:
// const street = address.street;
// const city = address.city;
// const country = address.country;

// Mai simplu însă:
// const { street, city, country } = address;

// Dacă vrem doar street:
// const { street } = address;

// Dacă vrem street, dar stocat în st:
// const { street: st } = address;
// ----------------------------------------------------------------------------



// Spread Operator ============================================================
// ----------------------------------------------------------------------------
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second); // old way

const combined = [...first, ...second];

const combined1 = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first); // [1, 2, 3]
console.log(clone); // [1, 2, 3]
// ----------------------------------------------------------------------------

// Merge și pentru obiecte:
const first1 = { name: 'John' };
const second1 = { job: 'Instructor' };

const combined2 = { ...first1 , ...second1, location: 'Australia' };
console.log(combined2);

const clone2 = { ...first };
// ----------------------------------------------------------------------------



// Classes ====================================================================
// ----------------------------------------------------------------------------
// Problema: codul din walk() dacă are un bug trebuie reparat în mai
// multe locuri
const person7 = {
  name: 'John',
  walk() {
    console.log("walk");
  }
}

const person8 = {
  name: 'John',
}

// Soluția: folosim clasă
// ----------------------------------------------------------------------------
class CoolPerson {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person9 = new CoolPerson('John');
person9.walk();
// ----------------------------------------------------------------------------



// Inheritance ================================================================
// ----------------------------------------------------------------------------
class Teacher extends CoolPerson {
  constructor(name, degree) {
    super(name); // folosim constructorul din clasa părinte, altfel dă eroare
    this.degree = degree;
  }

  teach() {
    console.log('Teach');
  }
}

const teacher = new Teacher('John', 'MSc');
teacher.walk();
teacher.teach();
// ----------------------------------------------------------------------------



// Modules ====================================================================
// ----------------------------------------------------------------------------
// Fiecare clasă într-un fișier separat.
// Implicit clasele sunt vizibile doar în fișierul în care sunt definite.
// Ca să fie vizibile trebuie făcute public. Și se face exportându-le.
// import { ZTeacher } from './teacher';
// const newTeacher = new ZTeacher("Nume", "Grad");
// newTeacher.teach();
// Solve errors with: https://stackoverflow.com/a/61015812/1929820
