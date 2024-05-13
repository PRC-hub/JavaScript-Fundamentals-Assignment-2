function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.round(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2024-08-30'
console.log(calculateRemainingDays(eventDate));
