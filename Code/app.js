let peopleBtn = document.getElementById('peopleBtn');
peopleBtn.addEventListener('click', function(){
    getPeople(1);
});

// API call
function getPeople (pageNumber) {
    let peopleUrl = 'https://swapi.dev/api/people/?page='.concat(pageNumber);
    fetch(peopleUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(people) {
        console.log('The request succeeded');
        console.log(people);
        createPeople(people.results, people.count);
    })
    .catch(function(err) {
        console.log('The request has failed');
        console.log(err);
    })
}

function createPeople(people, count) {
    let containerDiv = document.getElementById('containerDiv');
    let paginationWrapper = document.getElementById('paginationWrapper');
    containerDiv.innerHTML = '';
    paginationWrapper.innerHTML = '';

    let myTable = document.createElement("table");
    myTable.style.marginLeft = 'auto';
    myTable.style.marginRight = 'auto';
    myTable.style.width = '80%';

    let tableHeader = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.innerHTML += '<th>Name:</th><th>Height:</th><th>Mass:</th><th>Gender:</th><th>Birth Year:</th><th>Appearances:</th>';
    headerRow.style.color = 'yellow';
    headerRow.style.textAlign = 'center';
    tableHeader.appendChild(headerRow);
    myTable.appendChild(tableHeader);

    let tableBody = document.createElement('tbody');

    for (let j = 0; j < people.length; j++) {
        let firstPerson = document.createElement('tr');
        for (let i = 0; i < 1; i++) {
            firstPerson.innerHTML += `<td>${people[j].name}</td>
            <td>${people[j].height}</td>
            <td>${people[j].mass}</td>
            <td>${people[j].gender}</td>
            <td>${people[j].birth_year}</td>
            <td>${people[j].films.length}</td>`;
        }
        firstPerson.style.textAlign = 'center';
        tableBody.appendChild(firstPerson);
    }

    let pageCount = Math.ceil(count/10);
    let wrapper = document.getElementById('paginationWrapper');
    for (let i = 1; i <= pageCount; i++) {
        let button = document.createElement('div');
        button.innerHTML += `<button>${i}</button>`;
        button.addEventListener('click', function() {
            getPeople(i);
        })

        wrapper.appendChild(button);
    }
    
    myTable.appendChild(tableBody);
    containerDiv.appendChild(myTable);
}