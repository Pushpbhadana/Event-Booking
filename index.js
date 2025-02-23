document.addEventListener('DOMContentLoaded', function () {
    const loginUserForm = document.getElementById('loginFormUser');
    const loginAdminForm = document.getElementById('loginFormAdmin');
    const addEventForm = document.getElementById('addEventForm');
    const deleteEventForm = document.getElementById('deleteEventForm');
    const addEventButton = document.getElementById('addEventButton');
    const deleteEventButton = document.getElementById('deleteEventButton');
    const logoutButton = document.getElementById('logout');
    const adminLogoutButton = document.getElementById('adminLogout');
    const adminLoginButton = document.getElementById('AdminLogin');
    const userLoginButton = document.getElementById('UserLogin');

    // Default credentials for user login
    const defaultUserEmail = 'user@example.com';
    const defaultUserPassword = 'user123';

    // Default credentials for admin login
    const defaultAdminEmail = 'admin@example.com';
    const defaultAdminPassword = 'admin123';

    loginUserForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userEmail = document.getElementById('userMail').value;
        const userPassword = document.getElementById('passkey').value;

        if (userEmail === defaultUserEmail && userPassword === defaultUserPassword) {
            loginUserPage();
        } else {
            alert('Invalid email or password for user login.');
        }
    });

    loginAdminForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const adminEmail = document.getElementById('adminMail').value;
        const adminPassword = document.getElementById('adminKey').value;

        if (adminEmail === defaultAdminEmail && adminPassword === defaultAdminPassword) {
            loginAdminPage();
        } else {
            alert('Invalid email or password for admin login.');
        }
    });

    addEventButton.addEventListener('click', function () {
        addEvent();
    });

    deleteEventButton.addEventListener('click', function () {
        closeEvent();
    });

    logoutButton.addEventListener('click', function () {
        logoutUser();
    });

    adminLogoutButton.addEventListener('click', function () {
        logoutAdmin();
    });

    adminLoginButton.addEventListener('click', function () {
        loginAdmin();
    });

    userLoginButton.addEventListener('click', function () {
        loginUser();
    });

    function loginUserPage() {
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'grid';
        document.getElementById('mainInterface').style.display = 'grid';
    }

    function loginAdminPage() {
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'grid';
        document.getElementById('mainInterface').style.display = 'grid';
    }

    function logoutUser() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    function logoutAdmin() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    function loginAdmin() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'flex';
    }

    function loginUser() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    function addEvent() {
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventArtist = document.getElementById('eventArtist').value;
        const imgUrl = document.getElementById('imgUrl').value;

        const newCol = document.createElement('div');
        newCol.className = 'col-md-3';
        newCol.id = eventName;

        const card = document.createElement('div');
        card.className = 'card h-100';

        const cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = imgUrl;

        const cardName = document.createElement('div');
        cardName.className = 'h2 m-1';
        cardName.textContent = eventName;

        const cardDetails = document.createElement('div');
        cardDetails.className = 'ms-1 m-0';

        const cardDate = document.createElement('p');
        cardDate.textContent = 'Date: ' + eventDate;

        const cardArtist = document.createElement('p');
        cardArtist.textContent = 'Artist: ' + eventArtist;

        const cardLocation = document.createElement('p');
        cardLocation.textContent = 'Location: ' + eventLocation;

        const bookEvent = document.createElement('button');
        bookEvent.className = 'btn btn-primary bookEvent mt-1';
        bookEvent.textContent = 'Book';
        
        // Add click event listener to the book button
        bookEvent.addEventListener('click', function() {
            alert('Event has been booked!');
        });

        cardDetails.appendChild(cardDate);
        cardDetails.appendChild(cardArtist);
        cardDetails.appendChild(cardLocation);
        cardDetails.appendChild(bookEvent);
        card.appendChild(cardImage);
        card.appendChild(cardName);
        card.appendChild(cardDetails);
        newCol.appendChild(card);

        document.getElementById('newEvent').appendChild(newCol);

        localStorage.setItem('newCol', JSON.stringify(newCol));
    }

    function closeEvent() {
        const eventNameInput = document.getElementById('deleteEvent').value;
        const eventName = document.getElementById(eventNameInput);

        if (!eventName) {
            alert('Please Enter Event Name');
            return;
        } else {
            eventName.parentNode.removeChild(eventName);
            alert('Event has been Deleted');
            document.getElementById('deleteEvent').value = '';
            return;
        }
    }
document.addEventListener('DOMContentLoaded', function () {
    // Get references to various elements in the DOM
    const loginUserForm = document.getElementById('loginFormUser');
    const loginAdminForm = document.getElementById('loginFormAdmin');
    const addEventForm = document.getElementById('addEventForm');
    const deleteEventForm = document.getElementById('deleteEventForm');
    const addEventButton = document.getElementById('addEventButton');
    const deleteEventButton = document.getElementById('deleteEventButton');
    const logoutButton = document.getElementById('logout');
    const adminLogoutButton = document.getElementById('adminLogout');
    const adminLoginButton = document.getElementById('AdminLogin');
    const userLoginButton = document.getElementById('UserLogin');

    // Default credentials for user login
    const defaultUserEmail = 'user@example.com';
    const defaultUserPassword = 'user123';

    // Default credentials for admin login
    const defaultAdminEmail = 'admin@example.com';
    const defaultAdminPassword = 'admin123';

    // Event listener for user login form submission
    loginUserForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userEmail = document.getElementById('userMail').value;
        const userPassword = document.getElementById('passkey').value;

        // Check if the entered credentials match the default user credentials
        if (userEmail === defaultUserEmail && userPassword === defaultUserPassword) {
            loginUserPage();
        } else {
            alert('Invalid email or password for user login.');
        }
    });

    // Event listener for admin login form submission
    loginAdminForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const adminEmail = document.getElementById('adminMail').value;
        const adminPassword = document.getElementById('adminKey').value;

        // Check if the entered credentials match the default admin credentials
        if (adminEmail === defaultAdminEmail && adminPassword === defaultAdminPassword) {
            loginAdminPage();
        } else {
            alert('Invalid email or password for admin login.');
        }
    });

    // Event listener for add event button click
    addEventButton.addEventListener('click', function () {
        addEvent();
    });

    // Event listener for delete event button click
    deleteEventButton.addEventListener('click', function () {
        closeEvent();
    });

    // Event listener for user logout button click
    logoutButton.addEventListener('click', function () {
        logoutUser();
    });

    // Event listener for admin logout button click
    adminLogoutButton.addEventListener('click', function () {
        logoutAdmin();
    });

    // Event listener for admin login button click
    adminLoginButton.addEventListener('click', function () {
        loginAdmin();
    });

    // Event listener for user login button click
    userLoginButton.addEventListener('click', function () {
        loginUser();
    });

    // Function to display user interface after successful login
    function loginUserPage() {
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'grid';
        document.getElementById('mainInterface').style.display = 'grid';
    }

    // Function to display admin interface after successful login
    function loginAdminPage() {
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'grid';
        document.getElementById('mainInterface').style.display = 'grid';
    }

    // Function to handle user logout
    function logoutUser() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    // Function to handle admin logout
    function logoutAdmin() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    // Function to display admin login form
    function loginAdmin() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'flex';
    }

    // Function to display user login form
    function loginUser() {
        document.getElementById('adminInterface').style.display = 'none';
        document.getElementById('loginAdmin').style.display = 'none';
        document.getElementById('userInterface').style.display = 'none';
        document.getElementById('mainInterface').style.display = 'none';
        document.getElementById('loginUser').style.display = 'flex';
    }

    // Function to add a new event
    function addEvent() {
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventArtist = document.getElementById('eventArtist').value;
        const imgUrl = document.getElementById('imgUrl').value;

        // Create a new column for the event
        const newCol = document.createElement('div');
        newCol.className = 'col-md-3';
        newCol.id = eventName;

        // Create a card for the event
        const card = document.createElement('div');
        card.className = 'card h-100';

        // Create an image element for the event
        const cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = imgUrl;

        // Create a name element for the event
        const cardName = document.createElement('div');
        cardName.className = 'h2 m-1';
        cardName.textContent = eventName;

        // Create a details section for the event
        const cardDetails = document.createElement('div');
        cardDetails.className = 'ms-1 m-0';

        // Create a date element for the event
        const cardDate = document.createElement('p');
        cardDate.textContent = 'Date: ' + eventDate;

        // Create an artist element for the event
        const cardArtist = document.createElement('p');
        cardArtist.textContent = 'Artist: ' + eventArtist;

        // Create a location element for the event
        const cardLocation = document.createElement('p');
        cardLocation.textContent = 'Location: ' + eventLocation;

        // Create a book button for the event
        const bookEvent = document.createElement('button');
        bookEvent.className = 'btn btn-primary bookEvent mt-1';
        bookEvent.textContent = 'Book';
        
        // Add click event listener to the book button
        bookEvent.addEventListener('click', function() {
            alert('Event has been booked!');
        });

        // Append all elements to the card
        cardDetails.appendChild(cardDate);
        cardDetails.appendChild(cardArtist);
        cardDetails.appendChild(cardLocation);
        cardDetails.appendChild(bookEvent);
        card.appendChild(cardImage);
        card.appendChild(cardName);
        card.appendChild(cardDetails);
        newCol.appendChild(card);

        // Append the new column to the event container
        document.getElementById('newEvent').appendChild(newCol);

        // Store the new column in local storage
        localStorage.setItem('newCol', JSON.stringify(newCol));
    }

    // Function to delete an event
    function closeEvent() {
        const eventNameInput = document.getElementById('deleteEvent').value;
        const eventName = document.getElementById(eventNameInput);

        // Check if the event exists
        if (!eventName) {
            alert('Please Enter Event Name');
            return;
        } else {
            // Remove the event from the DOM
            eventName.parentNode.removeChild(eventName);
            alert('Event has been Deleted');
            document.getElementById('deleteEvent').value = '';
            return;
        }
    }

    // Initial setup to display the user login form
    logoutUser();
});
    // Initial setup
    logoutUser();
});