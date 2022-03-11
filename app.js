const countdown = () => {
    const countDate = new Date('January 1, 2023 00:00:00').getTime()
    
    const now = new Date().getTime();
    const gap = countDate - now;

    //how does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    //calculate the time
    const textDay= Math.floor(gap / day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);

    document.querySelector('.day').innerHTML = textDay;   
    document.querySelector('.hour').innerHTML = textHour;   
    document.querySelector('.minute').innerHTML = textMinute;   
    document.querySelector('.second').innerHTML = textSecond;   
    
    // console.log(textDay);

    console.log(gap)
};

setInterval(countdown, 1000);

