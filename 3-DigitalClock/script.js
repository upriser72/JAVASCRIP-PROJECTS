const clock = document.getElementById('clock')


//A function to be executed every delay milliseconds. 
//The first execution happens after delay milliseconds.
setInterval(function(){

    let date = new Date();
    //console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
},1000);