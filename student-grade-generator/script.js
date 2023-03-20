const form = document.querySelector('form');
const showGrade = document.getElementById('grade');

//ad submit event to my form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const marks = document.getElementById('marks').value

  //grade according to marks
  let grade;
  if (marks >= 80) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  
  //show grade
  showGrade.innerHTML = grade;
});
