import { ZPerson } from './person';

export class ZTeacher extends ZPerson {
  constructor(name, degree) {
    super(name); // folosim constructorul din clasa părinte, altfel dă eroare
    this.degree = degree;
  }

  teach() {
    console.log('Teach');
  }
}
