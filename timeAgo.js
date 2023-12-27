function timeAgo(timestamp) {
    // Calculate the time elapsed since the given timestamp
    const currentDate = new Date();
    const timestampDate = new Date(timestamp);
    const secondsAgo = Math.floor((currentDate - timestampDate) / 1000);

    // Define time periods in seconds
    const minute = 60,
        hour = 3600,
        day = 86400,
        month = 2628000, // Approx. average month length in seconds (30.44 days)
        year = 31536000; // 365 days in seconds

    let unit, count;

    // Calculate time ago in the most appropriate unit
    if (secondsAgo < minute) {
        unit = 'second';
        count = secondsAgo;
    } else if (secondsAgo < hour) {
        unit = 'minute';
        count = Math.floor(secondsAgo / minute);
    } else if (secondsAgo < day) {
        unit = 'hour';
        count = Math.floor(secondsAgo / hour);
    } else if (secondsAgo < month) {
        unit = 'day';
        count = Math.floor(secondsAgo / day);
    } else if (secondsAgo < year) {
        unit = 'month';
        count = Math.floor(secondsAgo / month);
    } else {
        unit = 'year';
        count = Math.floor(secondsAgo / year);
    }

    // Pluralize the unit if count is not 1
    unit += (count !== 1) ? 's' : '';

    // Return the formatted string
    return `${count} ${unit} ago`;
}

console.log(timeAgo("2023-11-26T21:56:18Z"));