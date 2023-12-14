const liveClock = () => {
    const { hours, minutes, seconds } = new Date();
    console.log(`${hours}:${minutes}:${seconds}`);
};

setInterval(liveClock, 1000);


