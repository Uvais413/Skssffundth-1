document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if a student is logged in
    const loggedInStudent = sessionStorage.getItem('loggedInStudent');

    if (!loggedInStudent) {
        // If no student data in session storage, redirect to login page
        window.location.href = 'index.html';
        return; // Stop execution
    }

    // Parse the student data from session storage
    const student = JSON.parse(loggedInStudent);

    // 2. Get elements to populate
    const studentPhoto = document.getElementById('studentPhoto');
    const studentName = document.getElementById('studentName');
    const studentUserId = document.getElementById('studentUserId');
    const currentDateSpan = document.getElementById('currentDate');
    const currentDaySpan = document.getElementById('currentDay');
    const checkBalanceButton = document.getElementById('checkBalanceButton');
    const logoutButton = document.getElementById('logoutButton');

    // 3. Populate student data
    if (student.photo) {
        studentPhoto.src = student.photo;
    } else {
        // Fallback for students without a specific photo set
        studentPhoto.src = 'dummy-profile.png';
    }
    studentName.textContent = student.name;
    studentUserId.textContent = student.userId;

    // 4. Display current date and day
    const now = new Date();
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsDay = { weekday: 'long' };
    currentDateSpan.textContent = now.toLocaleDateString('en-US', optionsDate);
    currentDaySpan.textContent = now.toLocaleDateString('en-US', optionsDay);

    // 5. Handle "View My Account" button click
    checkBalanceButton.addEventListener('click', () => {
        if (student.spreadsheetLink) {
            window.open(student.spreadsheetLink, '_blank'); // Open link in a new tab
        } else {
            alert('Spreadsheet link not available for this student.');
        }
    });

    // 6. Handle Logout button click
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('loggedInStudent'); // Clear student data
        window.location.href = 'index.html'; // Redirect to login page
    });
});