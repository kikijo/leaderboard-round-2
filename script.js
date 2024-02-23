// Participant data array (example)
const participants = [
    { name: 'Participant 1', surveyStatus: 'completed' },
    { name: 'Participant 2', surveyStatus: 'completed' },
    { name: 'Participant 3', surveyStatus: 'started' },
    { name: 'Participant 4', surveyStatus: 'started' },
    { name: 'Participant 5', surveyStatus: 'not started' },
    { name: 'Participant 6', surveyStatus: 'not started' },
    { name: 'Participant 7', surveyStatus: 'not started' },
    { name: 'Participant 8', surveyStatus: 'not started' },
    { name: 'Participant 9', surveyStatus: 'not started' },
    { name: 'Participant 10', surveyStatus: 'not started' },
    { name: 'Participant 11', surveyStatus: 'not started' },
    { name: 'Participant 12', surveyStatus: 'not started' },
    { name: 'Participant 13', surveyStatus: 'not started' },
    { name: 'Participant 14', surveyStatus: 'not started' },
    { name: 'Participant 15', surveyStatus: 'not started' },
    { name: 'Participant 16', surveyStatus: 'not started' },
];

// Function to build the leaderboard
function buildLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Clear existing leaderboard entries

    participants.forEach(participant => {
        const listItem = document.createElement('li');

        const participantInfo = document.createElement('span');
        participantInfo.textContent = `${participant.name}`;
        listItem.appendChild(participantInfo);

        const progressBar = document.createElement('progress');
        progressBar.value = participant.surveyStatus === 'completed' ? 100 : participant.surveyStatus === 'started' ? 50 : 0;
        progressBar.max = 100;
        listItem.appendChild(progressBar);

        // Create and append the status label with HTML content for the star size adjustment
        const statusLabel = document.createElement('span');
        statusLabel.innerHTML = getStatusLabel(participant.surveyStatus); // Use innerHTML to parse the span with the style
        listItem.appendChild(statusLabel);

        leaderboard.appendChild(listItem);
    });
}

// Function to determine the status label based on the survey status
function getStatusLabel(status) {
    switch (status) {
        case 'started':
            return 'In Progress';
        case 'completed':
            // Wrap the star emoji in a span and significantly increase its font size
            return '<span style="font-size: 200%;">Complete</span>';
        default:
            return 'Not Started';
    }
}

// Countdown Timer Logic and page load initialization remain unchanged

