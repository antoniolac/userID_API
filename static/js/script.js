document.addEventListener("DOMContentLoaded", function() {
    let url = "https://randomuser.me/api/";

    // Select DOM elements
    let img = document.querySelector("#img");
    let generalInfo = document.querySelector("#generalInfo");
    let liveInfo = document.querySelector("#liveInfo");
    let email = document.querySelector("#email");
    let cell = document.querySelector("#cell");
    let btn = document.querySelector("#btn");
    let userCard = document.querySelector("#userCard");

    // Button click event
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let user = data.results[0];

                // Show the user card
                userCard.classList.remove("hidden");

                // Update image
                img.src = user.picture.large;

                // Update general info
                generalInfo.innerHTML = 
                    `First Name: ${user.name.first} <br>
                     Last Name: ${user.name.last} <br>
                     Age: ${user.dob.age} <br>
                     Date of Birth: ${user.dob.date.substring(0, 10)} <br>
                     Gender: ${user.gender}`;

                // Update address information
                liveInfo.innerHTML = 
                    `Nationality: ${user.nat} <br>
                     Residence: ${user.location.street.number} ${user.location.street.name}, ${user.location.city} <br>
                     State: ${user.location.state} <br>
                     Country: ${user.location.country} <br>
                     Postcode: ${user.location.postcode}`;

                // Update email and phone number
                email.innerHTML = `Email: ${user.email}`;
                cell.innerHTML = `Cell phone: ${user.cell}`;
            });
    });
});





