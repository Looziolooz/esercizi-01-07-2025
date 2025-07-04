//Steg 1: Skapa ett Interface
interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

/* Steg 2: Skapa bokobjekt */
const book1: Book = {
  title: "Mysteriet i skogen",
  author: "Eva Larsson",
  year: 2019,
  isAvailable: true
};

const book2: Book = {
  title: "Framtidens kod",
  author: "Jonas Berg",
  year: 2023,
  isAvailable: false
};

/*Steg 3 uppdaterar webbsidans innehåll när TypeScript-koden laddas. */
const statusMessage = document.getElementById("status-message");
if (statusMessage) {
  statusMessage.textContent = "Sidan är redo!";
}

/* Setg 4 : Genom type assertion (as HTMLInputElement) kan man komma åt .value korrekt. */
window.onload = () => {
  const inputEl = document.getElementById("user-name-input") as HTMLInputElement;
  if (inputEl) {
    console.log("Inputvärde:", inputEl.value);
  } else {
    console.error("Elementet med id 'user-name-input' hittades inte.");
  }
};

/* Steg 5: Dynamiskt skapa och lägga till element */
const dynamicDiv = document.createElement("div");
dynamicDiv.textContent = "Detta är en dynamisk div!";
document.body.appendChild(dynamicDiv);

/* Steg 6: renderar en lista automatiskt baserat på data*/
const students = [
  { name: "Erik", age: 20 },
  { name: "Sara", age: 22 }
];

const studentList = document.getElementById("student-list");

if (studentList) {
  studentList.innerHTML = students
    .map(student => `<li>${student.name}, ${student.age} år</li>`)
    .join("");
}

