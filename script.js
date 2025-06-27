document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const userIdInput = document.getElementById('userId');
    const passcodeInput = document.getElementById('passcode');
    const errorMessage = document.getElementById('errorMessage');

    
    const students = [
        {
            userId: 'Uvais',
            passcode: '123',
            name: 'Uvais',
            photo: 'uvais.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=1987261765&single=true'
        },
        {
            userId: 'sahl',
            passcode: 'harpper1234',
            name: 'MUHAMMED SAHL NV',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=122098699&single=true'
        },
        {
            userId: 'MUHAMMED ANSIL',
            passcode: 'MUHAMMEDANSIL',
            name: 'MUHAMMED ANSIL AN',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=190390898&single=true'
        },
        {
            userId: '162009',
            passcode: '162009',
            name: 'SAYYID MUHAMMED ADHIL',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=431344764&single=true'
        },
        {
            userId: 'Parkkal islu',
            passcode: 'Islu@2928',
            name: 'MUHAMMED ISLAH P',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=761870303&single=true'
        },
        {
            userId: 'Naseeb12',
            passcode: 'Nibunaseeb',
            name: 'MOHAMMED NASEEB P',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=1417302995&single=true'
        },
        {
            userId: 'Abdullah',
            passcode: '808613',
            name: 'ABDYLLAH M S',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=895386043&single=true'
        },
        {
            userId: 'Basil Kuttoor',
            passcode: '250191',
            name: 'MUHAMMED BASIL A',
            photo: 'basil.JPG', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTUGsCfaU4vJ27cRbF1qzfTTw0y8Z3MDvmp1os7MtzqTM02ggea1CBrXp0272D-S9uEz-fnNEifYfnc/pubhtml?gid=764584542&single=true'
        },
        {
            userId: '15401',
            passcode: '201444',
            name: 'MUHAMMAD NIJAD E',
            photo: 'nijad.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=1103885579&single=true'
        },
        {
            userId: 'Shadilvm',
            passcode: 'Shadilvm',
            name: 'MUHAMMED SHADIL VM',
            photo: 'shadil.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=2070671926&single=true'
        },
        {
            userId: 'Csmnabeelckd',
            passcode: 'qwsdxcop',
            name: 'MUHAMMED NABEEL CS',
            photo: 'nabeel.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=1474150325&single=true'
        },
        {
            userId: 'Anshad8592',
            passcode: '883918',
            name: 'MUHAMMED ANSHAD KT',
            photo: 'anshad.jpg', 
            spreadsheetLink: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDW-ZwjYoSeQoNDcYGNxJ819EM7qUh9yGYr2-UqX-2aqvC4V5zQen1nULDaDYyCehfgvSZHybaou1L/pubhtml?gid=445685708&single=true'
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvais',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: ''
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvais',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: ''
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvais',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: ''
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvais',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: ''
        },
        {
            userId: 'ap',
            passcode: '1sgd2',
            name: 'Uvais',
            photo: 'demo passport 2.jpg', 
            spreadsheetLink: ''
        },

       
        
    ];
    

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
