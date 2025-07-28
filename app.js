function updateCountdown() {
    // Set birthday - hardcoded date
    const birthday = new Date('2026-05-19');
    const now = new Date();
    const difference = birthday - now;
    
    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the countdown display
    document.getElementById('countdown').innerHTML = 
        days + ' days ' + 
        hours + ' hours ' + 
        minutes + ' minutes ' + 
        seconds + ' seconds';
}

// Update every second
setInterval(updateCountdown, 1000);

// Run immediately
updateCountdown();
