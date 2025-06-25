document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const userIdInput = document.getElementById('userId');
    const passcodeInput = document.getElementById('passcode');
    const errorMessage = document.getElementById('errorMessage');

    // --- Dummy Student Data ---
    // In a real application, this data would come from a secure backend database.
    // For this example, we're hardcoding it.
    const students = [
        {
            userId: 'ap',
            passcode: '12',
            name: 'Uvis',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: ''
        },
        {
            userId: 'sahl',
            passcode: 'harpper1234',
            name: 'MUHAMMED SAHL NV',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=122098699&single=true'
        },
        {
            userId: 'MUHAMMED ANSIL',
            passcode: 'MUHAMMEDANSIL',
            name: 'MUHAMMED ANSIL AN',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=190390898&single=true'
        },
        {
            userId: '162009',
            passcode: '162009',
            name: 'SAYYID MUHAMMED ADHIL',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=431344764&single=true'
        },
        {
            userId: 'Parkkal islu',
            passcode: 'Islu@2928',
            name: 'MUHAMMED ISLAH P',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=761870303&single=true'
        },
        {
            userId: 'Naseeb12',
            passcode: 'Nibunaseeb',
            name: 'MOHAMMED NASEEB P',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=1417302995&single=true'
        },
        {
            userId: 'Abdullah',
            passcode: '808613',
            name: 'ABDYLLAH M S',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=895386043&single=true'
        },
        {
            userId: 'Basil Kuttoor',
            passcode: '250191',
            name: 'MUHAMMED BASIL A',
            photo: 'basil.JPG', // Make sure this image is in your project folder
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTUGsCfaU4vJ27cRbF1qzfTTw0y8Z3MDvmp1os7MtzqTM02ggea1CBrXp0272D-S9uEz-fnNEifYfnc/pubhtml?gid=764584542&single=true'
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvis',
            photo: 'demo passport 2.jpg', // Make sure this image is in your project folder
            spreadsheetLink: ''
        },
       
        
    ];
    // --- End Dummy Student Data ---

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const enteredUserId = userIdInput.value.trim();
        const enteredPasscode = passcodeInput.value.trim();

        const foundStudent = students.find(student =>
            student.userId === enteredUserId && student.passcode === enteredPasscode
        );

        if (foundStudent) {
            // Login successful
            errorMessage.classList.remove('show'); // Hide error message
            // Store student data in sessionStorage for access on the next page
            sessionStorage.setItem('loggedInStudent', JSON.stringify(foundStudent));
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Login failed
            errorMessage.textContent = 'Invalid User ID or Passcode.';
            errorMessage.classList.add('show'); // Show error message
        }
    });
});
