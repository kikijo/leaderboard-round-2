// Participant data array (example)
const participants = [
    { avatar: 'owl', name: '', surveyStatus: 'completed' },
    { avatar: 'dog', name: '', surveyStatus: 'completed' },
    { avatar: 'lion', name: '', surveyStatus: 'completed' },
    { avatar: 'koala', name: '', surveyStatus: 'started' },
    { avatar: 'tiger', name: '', surveyStatus: 'started' },
    { avatar: 'butterfly', name: '', surveyStatus: 'not started' },
    { avatar: 'cow', name: '', surveyStatus: 'not started' },
    { avatar: 'monkey', name: '', surveyStatus: 'not started' },
    { avatar: 'cat', name: '', surveyStatus: 'not started' },
    { avatar: 'frog', name: '', surveyStatus: 'not started' },
    { avatar: 'moose', name: '', surveyStatus: 'not started' },
    { avatar: 'bunny', name: '', surveyStatus: 'not started' },
    { avatar: 'bear', name: '', surveyStatus: 'not started' },
    { avatar: 'fox', name: '', surveyStatus: 'not started' },
    { avatar: 'unicorn', name: '', surveyStatus: 'not started' },
    { avatar: 'mouse', name: '', surveyStatus: 'not started' },
];


// Function to build the leaderboard
function buildLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Clear existing leaderboard entries

    participants.forEach(participant => {
        const listItem = document.createElement('li');

        const avatarImg = document.createElement('img');
        avatarImg.src = `avatars/${participant.avatar}.png`;
        avatarImg.alt = `${participant.name}'s Avatar`;
        listItem.appendChild(avatarImg);

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
            return '<span style="font-size: 200%;"></span> Complete';
        default:
            return 'Not Started';
    }
}
// Countdown Timer Logic
const countDownDate = new Date("March 8, 2024 18:00:00 GMT+0000").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeleft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Survey Period Complete";
    }
}, 1000);

// Initialize the leaderboard when the page loads
document.addEventListener('DOMContentLoaded', buildLeaderboard);
