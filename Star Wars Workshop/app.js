// LOADER
let loader = document.getElementById('loader');
const toggleLoader = toggle => {
    if(toggle) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }

}

// PEOPLE

let peopleBtn = document.getElementById('peopleBtn');
peopleBtn.addEventListener('click', function(){
    getPeople(1);
});

// People API call
function getPeople (pageNumber) {
    let peopleUrl = 'https://swapi.dev/api/people/?page='.concat(pageNumber);
    toggleLoader(true);

    fetch(peopleUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(people) {
        toggleLoader(false);
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
    myTable.style.width = '90%';

    let tableHeader = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.innerHTML += '<th>Name:</th><th>Height:</th><th>Mass:</th><th>Gender:</th><th>Birth Year:</th><th>Appearances:</th>';
    headerRow.style.color = 'yellow';
    headerRow.style.textAlign = 'center';
    tableHeader.appendChild(headerRow);
    myTable.appendChild(tableHeader);

    let tableBody = document.createElement('tbody');

    for (let j = 0; j < people.length; j++) {
        let person = document.createElement('tr');
        person.style.fontSize = '12px';
        for (let i = 0; i < 1; i++) {
            person.innerHTML += `<td>${people[j].name}</td>
            <td>${people[j].height}</td>
            <td>${people[j].mass}</td>
            <td>${people[j].gender}</td>
            <td>${people[j].birth_year}</td>
            <td>${people[j].films.length}</td>`;
        }
        person.style.textAlign = 'center';
        tableBody.appendChild(person);
    }

    // Pagination
    let wrapper = document.getElementById('paginationWrapper');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';

    
    // Previous button
    let previousBtn = document.createElement('button');
    previousBtn.innerHTML += '<<';
    previousBtn.style.backgroundColor = 'yellow';
    previousBtn.style.border = 'none';
    previousBtn.style.borderRadius = '20%';
    previousBtn.style.padding = '5px 12px';
    wrapper.appendChild(previousBtn);

    // Page number buttons
    let pageCount = Math.ceil(count/10);
    for (let i = 1; i <= pageCount; i++) {
        let button = document.createElement('button');
        button.addEventListener('click', function() {
            getPeople(i);
        })

        button.innerHTML += `${i}`;
        button.style.backgroundColor = 'yellow';
        button.style.border = 'none';
        button.style.borderRadius = '20%';
        button.style.padding = '5px 12px';

        wrapper.appendChild(button);
    }
    
    // Next button
    let nextBtn = document.createElement('button');
    nextBtn.innerHTML += '>>';
    nextBtn.style.backgroundColor = 'yellow';
    nextBtn.style.border = 'none';
    nextBtn.style.borderRadius = '20%';
    nextBtn.style.padding = '5px 12px';
    wrapper.appendChild(nextBtn);
    // Buttons end


    myTable.appendChild(tableBody);
    containerDiv.appendChild(myTable);
}









// STARSHIPS

let pageNumber = 1;
let starshipsBtn = document.getElementById('starshipsBtn');
starshipsBtn.addEventListener('click', function(){
    getStarships(pageNumber);
});
var index = 0;

// function displayItem(starships, prevBtn, nxBtn) {
//     prevBtn.disabled = index <= 0;
//     nxBtn.disabled = index >= starships.next -1;
//     console.log(starships);
// }


// Starships API call
function getStarships (pageNumber) {
    let starshipsUrl = 'https://swapi.dev/api/starships/?page='.concat(pageNumber);
    toggleLoader(true);
    fetch(starshipsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(starships) {
        toggleLoader(false);
        console.log('The request succeeded');
        console.log(starships);
        createStarships(starships.results, starships.count, starships);
    })
    .catch(function(err) {
        console.log('The request has failed');
        console.log(err);
    })
}

function createStarships(starships, count, starshipsObj) {
    let containerDiv = document.getElementById('containerDiv');
    let paginationWrapper = document.getElementById('paginationWrapper');
    containerDiv.innerHTML = '';
    paginationWrapper.innerHTML = '';

    let myTable = document.createElement("table");
    myTable.style.marginLeft = 'auto';
    myTable.style.marginRight = 'auto';
    myTable.style.width = '90%';

    let tableHeader = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.innerHTML += '<th>Name:</th><th>Model:</th><th>Manufacturer:</th><th>Cost:</th><th>People Capacity:</th><th>Class:</th>';
    headerRow.style.color = 'yellow';
    headerRow.style.textAlign = 'center';
    tableHeader.appendChild(headerRow);
    myTable.appendChild(tableHeader);

    let tableBody = document.createElement('tbody');

    for (let j = 0; j < starships.length; j++) {
        let starship = document.createElement('tr');
        starship.style.fontSize = '12px';
        for (let i = 0; i < 1; i++) {
            starship.innerHTML += `<td>${starships[j].name}</td>
            <td>${starships[j].model}</td>
            <td>${starships[j].manufacturer}</td>
            <td>${starships[j].cost_in_credits} credits</td>
            <td>Crew: ${starships[j].crew} & Passengers: ${starships[j].passengers}</td>
            <td>${starships[j].starship_class}</td>`;
        }
        starship.style.textAlign = 'center';
        tableBody.appendChild(starship);
    }

    // Pagination
    let wrapper = document.getElementById('paginationWrapper');
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    
    // Previous button
    let previousBtn = document.createElement('button');
    previousBtn.innerHTML += '<<';
    previousBtn.style.backgroundColor = 'yellow';
    previousBtn.style.border = 'none';
    previousBtn.style.borderRadius = '20%';
    previousBtn.style.padding = '5px 12px';
    wrapper.appendChild(previousBtn);

    previousBtn.addEventListener('click', function() {
        console.log(starships.previous.value)
        // displayItem(blogs.blogItem[--index]);
    });
    
    


    // Page number buttons
    let pageCount = Math.ceil(count/10);
    for (let i = 1; i <= pageCount; i++) {
        let button = document.createElement('button');
        button.addEventListener('click', function() {
            getStarships(i);
        })

        button.innerHTML += `${i}`;
        button.style.backgroundColor = 'yellow';
        button.style.border = 'none';
        button.style.borderRadius = '20%';
        button.style.padding = '5px 12px';

        wrapper.appendChild(button);
    }
    
    // Next button
    let nextBtn = document.createElement('button');
    nextBtn.innerHTML += '>>';
    nextBtn.style.backgroundColor = 'yellow';
    nextBtn.style.border = 'none';
    nextBtn.style.borderRadius = '20%';
    nextBtn.style.padding = '5px 12px';
    wrapper.appendChild(nextBtn);

    // nextBtn.addEventListener('click', function() {
    //     let page = parseInt(starshipsObj.next[starshipsObj.next.length - 1]);
    //     // console.log(page);
    //     // console.log(starshipsObj.next[page] + 1);
    //     console.log(`https://swapi.dev/api/starships/?page=${pageNumber + 1}`);
    //     starshipsObj.next = `https://swapi.dev/api/starships/?page=${pageNumber + 1}`
    //     console.log(starships);
    //     // displayItem(blogs.blogItem[++index]);
    // });
    // Buttons end


    myTable.appendChild(tableBody);
    containerDiv.appendChild(myTable);

    // displayItem(starships, previousBtn, nextBtn);
}