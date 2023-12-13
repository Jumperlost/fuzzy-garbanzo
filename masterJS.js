class Human {
  constructor(name, gander) {
    this.name = name;
    this.gander = gander;
  }
}

class Appartement {
  arrayInmate = [];
  methodAddInmate(inmate) {
    this.arrayInmate.push(inmate);
  }
}

class House {
  arrayAppartment = [];
  constructor(maxAppartments) {
    this.maxAppartments = maxAppartments;
  }
  addAppartment(Appartement) {
    if (this.arrayAppartment.length >= this.maxAppartments) {
      console.log(`
            Apartments have reached their maximum,add new`);
    } else {
      this.arrayAppartment.push(Appartement);
    }
  }
}

const human1 = new Human("Nick", "male");
const human2 = new Human("Jack", "male");
const human3 = new Human("Sara", "female");

const app1 = new Appartement();
const app2 = new Appartement();
const app3 = new Appartement();

app1.methodAddInmate(human1);
app2.methodAddInmate(human2);
app3.methodAddInmate(human3);

const house1 = new House(3);
house1.addAppartment(app1);
house1.addAppartment(app2);
house1.addAppartment(app3);

console.log(house1);
