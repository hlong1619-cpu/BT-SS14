const person = {
  name: "John Doe",
  age: 25,
  job: "Developer",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(person);
