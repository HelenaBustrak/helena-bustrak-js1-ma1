const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// question 1 

const cat = {
    complain: function sayMeow() {
        console.log("Meow!");
    }
}

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");


// question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6 

let resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;

// question 7

function theList(list) {
    for(let i = 0; i < list.length; i++) {
       console.log(list[i].name);

    }
}


theList(cats);

// question 8 

let catsProperties = "";
let catAge = "Age Unknown";
const catContainer = document.querySelector(".cat-container");



function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {

        if (typeof cats[i].age === undefined) {
            catAge = cats[i].age;
        }
        
        catsProperties = catsProperties + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>";

        const wrapDiv = "<div>" + catsProperties + "</div>";

        

        return wrapDiv

    }
}

const newHtml = createCats(cats);

catContainer.innerHTML = newHtml;


// i cant figure out how to display every object. 
