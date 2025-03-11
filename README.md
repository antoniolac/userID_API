# Random User ID Generator

## Overview

This is a simple static website that generates a random user ID upon request. The user interface is minimalistic, built using HTML and CSS, with styling primarily handled by Tailwind CSS utilities (https://tailwindcss.com/).

## Features

* **Random User Generation**: Click the central button to fetch a randomly generated user ID.
* **API Integration**: Uses the [Random User API](https://randomuser.me/api/?authuser=0) to retrieve user details in JSON format.
* **Lightweight Design**: Built with simplicity in mind, ensuring fast loading times and a clean UI.

## How It Works

1. Load the webpage.
2. Click the central button to generate a random user ID.
3. The system makes a request to `<span>https://randomuser.me/api/?authuser=0</span>`.
4. The retrieved user information is displayed on the page.

## Potential Issues

🚨 **API Downtime**: The Random User API is known to experience occasional downtime. If you encounter issues retrieving data, it is likely due to API unavailability rather than a problem with the site itself.

## Technologies Used

* **HTML**: Structure of the site.
* **CSS & Tailwind CSS**: Styling and layout design.
* **JavaScript (Fetch API)**: Handling API requests and updating the UI dynamically.

## License

This project is open-source and available under the MIT License.

---

✉️ Feel free to contribute or report any issues!
