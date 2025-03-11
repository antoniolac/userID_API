const url = "https://randomuser.me/api/";

//button
const btn = document.querySelector("#btn");

const e = document.querySelector("#errorCase");
const img = document.querySelector("#img");
const generalInfo = document.querySelector("#generalInfo");
const liveInfo = document.querySelector("#liveInfo");
const email = document.querySelector("#email");
const cell = document.querySelector("#cell");

// Cards with all info
const userCard = document.querySelector("#userCard");

function handleClick(event) {
    event.preventDefault();

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];

            //show the hidden card
            userCard.style.display = "block";  

            userCard.classList.add("show"); 

            //image
            img.src = user.picture.large;

            //general info
            generalInfo.innerHTML = 
                `First Name: ${user.name.first} <br>
                 Last Name: ${user.name.last} <br>
                 Age: ${user.dob.age} <br>
                 Date of Birth: ${user.dob.date.substring(0, 10)} <br>
                 Gender: ${user.gender}`;

            //living info
            liveInfo.innerHTML = 
                `Nationality: ${user.nat} <br>
                 Residence: ${user.location.street.number} ${user.location.street.name}, ${user.location.city} <br>
                 State: ${user.location.state} <br>
                 Country: ${user.location.country} <br>
                 Postcode: ${user.location.postcode}`;

            //contact info
            email.innerHTML = `Email: ${user.email}`;
            cell.innerHTML = `Cell phone: ${user.cell}`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            //sometimes the fetching doesn't happen becuse the API doesn't work
            //in that case show this message to the user
            e.innerHTML = "Something went wrong, try later";
        });
}

// Handling click event
btn.addEventListener("click", handleClick);
