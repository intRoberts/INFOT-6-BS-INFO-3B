const dayjs = require('dayjs');

// get current date
const now = dayjs();

// format current date
const currentDate = now.format('MMMM D, YYYY');

// calculate next week
const nextWeek = now.add(7, 'day').format('MMMM D, YYYY');

// print results
console.log("Current Date:", currentDate);
console.log("Date Next Week:", nextWeek);