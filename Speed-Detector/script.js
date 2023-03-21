const form = document.querySelector('form');
const points = document.getElementById('points');

//add submit event to my form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const speed = document.getElementById("speed").value
    let speedPoints = (speed - 70) / 5

    //calculate points and show
    if (speed <= 70) {
        points.innerHTML = 'Points: 0';
        return;
    }
    else{
        if (speedPoints > 120) {
        points.innerHTML = 'License suspended';
    }
    else {
        points.innerHTML = `Points: ${speedPoints}`;
    }
    }
    
});