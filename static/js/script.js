document.addEventListener("DOMContentLoaded", function() {
    let url = "https://randomuser.me/api/";

    //button
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", handleClick);
    
    //DOM elements
    let e = document.querySelector("#errorCase");
    let img = document.querySelector("#img");
    let generalInfo = document.querySelector("#generalInfo");
    let liveInfo = document.querySelector("#liveInfo");
    let email = document.querySelector("#email");
    let cell = document.querySelector("#cell");

    //cards with all info
    let userCard = document.querySelector("#userCard");

    //event
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
                let user = data.results[0];

                //show the hidden card
                userCard.classList.remove("hidden");

                setTimeout(() => {
                    userCard.classList.add("show");
                }, 200);

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
});







