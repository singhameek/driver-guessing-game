const f1Drivers = [
    { number: 1, name: "Lando Norris" },
    { number: 3, name: "Max Verstappen" },
    { number: 5, name: "Gabriel Bortoleto" },
    { number: 6, name: "Isack Hadjar" },
    { number: 10, name: "Pierre Gasly" },
    { number: 11, name: "Sergio Pérez" },
    { number: 12, name: "Andrea Kimi Antonelli" },
    { number: 14, name: "Fernando Alonso" },
    { number: 16, name: "Charles Leclerc" },
    { number: 18, name: "Lance Stroll" },
    { number: 23, name: "Alex Albon" },
    { number: 27, name: "Nico Hülkenberg" },
    { number: 30, name: "Liam Lawson" },
    { number: 31, name: "Esteban Ocon" },
    { number: 41, name: "Arvid Lindblad" },
    { number: 43, name: "Franco Colapinto" },
    { number: 44, name: "Lewis Hamilton" },
    { number: 55, name: "Carlos Sainz Jr." },
    { number: 63, name: "George Russell" },
    { number: 77, name: "Valtteri Bottas" },
    { number: 81, name: "Oscar Piastri" },
    { number: 87, name: "Oliver Bearman" }
];


const correctDriver = f1Drivers[Math.floor(Math.random() * f1Drivers.length)];

document.getElementById("number").innerText = correctDriver.number;

let choices = [correctDriver];
while (choices.length < 4) {
    let randomDriver = f1Drivers[Math.floor(Math.random() * f1Drivers.length)];
    if (!choices.some(d => d.number === randomDriver.number)) {
        choices.push(randomDriver);
    }
}

choices.sort(() => Math.random() - 0.5);

for (let i = 0; i < 4; i++) {
    let btn = document.getElementById(`btn-${i}`);
    btn.innerText = choices[i].name;

    btn.onclick = function() {
        let message = document.getElementById("result");

        if (choices[i].number === correctDriver.number) {
            message.innerText = "Correct!";
            message.style.color = "green";
        } else {
            message.innerText = `Wrong. It was ${correctDriver.name}.`;
            message.style.color = "red";
        }
    };
}
