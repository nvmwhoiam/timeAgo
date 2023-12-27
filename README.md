# TimeAgo Function

The `timeAgo` function is an enhanced JavaScript utility for displaying relative time. It's adept at expressing how much time has passed since or will pass until a specified timestamp, making it incredibly useful for applications that require a human-friendly representation of time differences. This function is ideal for forums, news feeds, or any application where the timing of posts and events is relevant.

## Features

- **Bidirectional Understanding**: Accurately represents both past and future times relative to the current date.
- **Dynamic Units**: Calculates and expresses time in the most fitting unit (seconds, minutes, hours, days, weeks, months, years).
- **Automatic Pluralization**: Adds 's' to pluralize units appropriately.
- **Intuitive Prefixes**: Uses "ago" for past times and "in" for future times for immediate understanding.

## How It Works

Input a JavaScript Date object or a timestamp in ISO 8601 format into the function. `timeAgo` will calculate the difference between the current time and the provided timestamp, then return a descriptive string in terms of the most appropriate unit, such as "2 hours ago" or "in 3 months".

## Usage

Below is an example demonstrating how to use the `timeAgo` function with a specific future date:

```javascript
// Define the timeAgo function here

// Example usage with a specific timestamp
const timestamp = "2024-11-26T21:56:18Z"; // Future date
console.log(timeAgo(new Date(timestamp))); // Outputs: "in 1 year" (or the exact time until the date from now)
console.log(timeAgo(timestamp)); // Outputs: "in 1 year" (or the exact time until the date from now)
```
