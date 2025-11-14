class StudentManager {
  constructor() {
    this.students = [];
  }
//1. Them sinh vien moi
addStudent() {
  console.log("Them sinh vien moi");

  let is = prompt("Nhap ma so sinh vien");
  let name = prompt("Nhap ten sinh vien:");
  let age = parseInt(prompt("Nhap tuoi"));
  
  //Kiem tra ma ID da ton tai chua
  if (this.students.some(student => student.id === id)) {
    alert("Ma so sinh vien da ton tai");
    return;
  }

  //Tao doi tuong sinh vien moi
  const newStudent {
    name: name,
    age: age,
    id: id
  };
  //Them vao mang
  thius.student.push(newStudent);
  alert(`Da them sinh vien: ${name}`);
  console.log(`Da them: ${name} - ${age} tuoi - ID: ${id}`);
}


}