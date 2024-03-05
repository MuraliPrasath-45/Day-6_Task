// 1.Write a “person” class to hold all the details.

class Person{
  constructor(firstname,lastname,Dob,location)
  {
      this.firstname = firstname;
      this.lastname = lastname;
      this.Dob = Dob;
      this.location = location;
  }
}
var person1 = new Person("Divya", "Bharathi", "2-06-1996" , "chennai");
var person2 = new Person("Swetha", "sekaran", "1-1-1998" , "chennai");
var person3 = new Person("Saratha", "Gokul", "9-10-1995" , "Salem");
var person4 = new Person("johnson", "George", "7-10-2001" , "Salem");
var person5 = new Person("Kumar", "Pandian", "8-7-1995" , "Ooty");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are :
"person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)

// 2.write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }

  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0;
  const timeInMinutes = 10;
  
  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
  
