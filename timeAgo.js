function timeAgo(timestamp) {
    // Calculate the time elapsed since or until the given timestamp
    const currentDate = new Date();
    const timestampDate = new Date(timestamp);
    let secondsDiff = (timestampDate - currentDate) / 1000;

    // Define time periods in seconds
    const minute = 60,
        hour = 3600,
        day = 86400,
        week = 604800,
        month = 2628000, // Approx. average month length in seconds (30.44 days)
        year = 31536000; // 365 days in seconds

    let unit, count, suffix;

    // Determine time direction and calculate time ago or time until
    if (secondsDiff < 0) {
        suffix = 'ago';
        secondsDiff = Math.abs(secondsDiff); // Make positive for calculation
    } else {
        suffix = 'in';
    }

    // Calculate time in the most appropriate unit
    if (secondsDiff < minute) {
        unit = 'second';
        count = secondsDiff;
    } else if (secondsDiff < hour) {
        unit = 'minute';
        count = Math.floor(secondsDiff / minute);
    } else if (secondsDiff < day) {
        unit = 'hour';
        count = Math.floor(secondsDiff / hour);
    } else if (secondsDiff < week) {
        unit = 'day';
        count = Math.floor(secondsDiff / day);
    } else if (secondsDiff < month) {
        unit = 'week';
        count = Math.floor(secondsDiff / week);
    } else if (secondsDiff < year) {
        unit = 'month';
        count = Math.floor(secondsDiff / month);
    } else {
        unit = 'year';
        count = Math.floor(secondsDiff / year);
    }

    // Pluralize the unit if count is not 1
    unit += (count !== 1) ? 's' : '';

    // Return the formatted string based on time direction
    return (suffix === 'ago') ? `${count} ${unit} ago` : `in ${count} ${unit}`;
}

// Usage examples
console.log(timeAgo(new Date(Date.now() - 12000)));        // 12 seconds ago
console.log(timeAgo(new Date(Date.now() + 180000)));       // in 3 minutes
console.log(timeAgo(new Date(Date.now() + 7200000)));      // in 2 hours
console.log(timeAgo(new Date(Date.now() - 259200000)));    // 3 days ago
console.log(timeAgo(new Date(Date.now() - 14515200000)));  // 6 months ago
console.log(timeAgo(new Date(Date.now() + 63158400000)));  // in 2 years

console.log(timeAgo("2023-11-26T21:56:18Z"));              // 3 hours ago
console.log(timeAgo("2023-11-28T21:56:18Z"));              // in 1 day