setInterval(()=>{
    d = new Date();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();


    const htime = 30*h + m/2;
    const mtime = m*6;
    const stime = 6*s;

    console.log(htime);

    document.getElementById("hour").style.transform = `rotate(${htime})`;
    hour.style.transform = `rotate(${htime}deg)`;
    minute.style.transform = `rotate(${mtime}deg)`;
    second.style.transform = `rotate(${stime}deg)`;

},1000)