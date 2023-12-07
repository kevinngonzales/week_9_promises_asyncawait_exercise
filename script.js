function addStudentToClass(student) {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
      setTimeout(() => {
        if (student.age > 18) {
          resolve(`${student.name} was accepted and added to the class after ${randomDelay / 1000} seconds.`);
        } else if (student.age < 18) {
          reject(`${student.name} was rejected after ${randomDelay / 1000} seconds because student is too young for this class.`);
        } else {
          reject(`Error`)
        }
      }, randomDelay);
    });
  }
  
  
  
  async function registerStudent(student) {
    try {
      const result = await addStudentToClass(student);
      console.log(result);
    } catch (error) {
      console.log(`${error}`);
    }
  }
  


  const students = [
      { name: "Alice", age: 20 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 19},
      { name: "Joseph", age: 32},
      { name: "Maple", age: 22},
      { name: "Sasha", age: 18}
  ];
  
  
  for (const student of students) {
  registerStudent(student);  
  }