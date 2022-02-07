// # Homework
// Create a button
// When the button is clicked, get the data from a given url with an AJAX call. \
// Show the details of all users in a Table. \

// *URL:* https://jsonplaceholder.typicode.com/users \

// *BONUS:* Try to show the complex properties in the table aswell :)

// *NOTE:* It is recommended to use Fetch. JQuery will be fine as well :)
console.log("Test");

let myBtn = document.getElementById("myBtn");
let tableContainer = document.getElementById("newTable");
myBtn.addEventListener("click", getPeople);

function getPeople() {
  let peopleUrl = "https://jsonplaceholder.typicode.com/users";
  fetch(peopleUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (people) {
      console.log("The request succeeded");
      console.log(people);
        createPeople(people);
    })
    .catch(function (err) {
      console.log("The request has failed");
      console.log(err);
    });
}

function createPeople(ppl) {
  let table = document.createElement("table");
  let keys = [];
  for (let person of ppl) {
    keys = Object.keys(person);
  }
  console.log(keys);
  let keyRow = document.createElement("tr");
  for (let key of keys) {
    if (key !== "id") {
      let keyCol = document.createElement("th");
      keyCol.innerHTML += key;
      keyRow.appendChild(keyCol);
      // keyRow.innerHTML += `<th>${key}</th>`;
    }
  }

  table.appendChild(keyRow);

  for (let person of ppl) {
    table.innerHTML += `<tr>
    <td style="border: 1px solid">${person.name}</td>
    <td style="border: 1px solid">${person.username}</td>
    <td style="border: 1px solid">${person.email}</td>
    <td style="border: 1px solid">${person.address.street}<br>${person.address.suite}<br>${person.address.city}<br>${person.address.zipcode}<br>${person.address.geo.lat}, ${person.address.geo.lng}</td>
    <td style="border: 1px solid">${person.phone}</td>
    <td style="border: 1px solid">${person.website}</td>
    <td style="border: 1px solid">${person.company.name} <br>${person.company.catchPhrase} <br>${person.company.bs}</td>
    </tr>
    `;
  }

  tableContainer.appendChild(table);
}