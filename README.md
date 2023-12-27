# TimeAgo Function

The `timeAgo` function is a simple, yet powerful utility for converting past date timestamps into a human-readable relative time string, such as "5 minutes ago" or "2 days ago". This function is particularly useful for creating user-friendly time stamps in applications where understanding the relative recency of an event is more intuitive than the exact date and time.

## Features

- **Easy to Use**: Simply pass a timestamp to the function and receive a readable string back.
- **Dynamic Time Units**: Converts time into the most relevant unit (seconds, minutes, hours, days, months, years).
- **Pluralization Handling**: Automatically handles pluralization of time units.
- **Precision**: Offers a straightforward representation of time elapsed for easy reading and understanding.

## How It Works

The function takes a single string input, a timestamp in ISO format (e.g., "2023-11-26T21:56:18Z"). It calculates the time elapsed from the current time back to the given timestamp and then expresses this duration in the largest appropriate time unit (seconds, minutes, hours, days, months, or years).

## Usage

```javascript
// Import or define the timeAgo function here

// Example usage
console.log(timeAgo("2023-11-26T21:56:18Z")); // Outputs: "30 days ago" (or however long it's been)
```
