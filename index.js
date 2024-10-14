class Freelancer {
    constructor(name, occupation, startingPrice) {
        this.name = name;
        this.occupation = occupation;
        this.startingPrice = startingPrice;
    }
}
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 }
]

const freelancerPool = []
freelancerPool.push(new Freelancer(`Bob`, `Teacher`, 50));
freelancerPool.push(new Freelancer(`Carol`, `Programmer`, 70));
freelancerPool.push(new Freelancer(`Eric`, `Teacher`, 60));
freelancerPool.push(new Freelancer(`Emily`, `Doctor`, 100));
freelancerPool.push(new Freelancer(`James`, `Driver`, 50));
freelancerPool.push(new Freelancer(`Olivia`, `Nurse`, 150));
freelancerPool.push(new Freelancer(`Bonnie`, `Therapist`, 200));
freelancerPool.push(new Freelancer(`Noah`, `Real Estate Agent`,88));
freelancerPool.push(new Freelancer(`Luke`, `Truck Driver`, 100));
freelancerPool.push(new Freelancer(`Sophia`, `Tutor`, 85));
freelancerPool.push(new Freelancer(`Karen`, `Personal Trainer`, 100));
freelancerPool.push(new Freelancer(`Liam`, `Executive Assistant`, 200));
freelancerPool.push(new Freelancer(`Nathan`, `Author`, 80));
freelancerPool.push(new Freelancer(`Bella`, `Babysitting`, 25));
console.log(freelancerPool);

let i = 0;


function updateAverage() {
    let sum = freelancers.reduce((sum, free) => sum + free.startingPrice, 0);
    // free= goes through each indv free // 
    let average = sum / freelancers.length;
    average = Math.floor(average * 100)/100;
    const averageDisplay = document.querySelector('#averagePrice');
    averageDisplay.innerText = average;
}

function render() {
    if (i == freelancerPool.length) {
        clearInterval(addFreelancerIntervalId);
    }
    const table = document.querySelector(".table");
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    table.appendChild(freelancerDiv);
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${freelancerPool[i].name}`;
    const occSpan = document.createElement("span");
    occSpan.textContent = `${freelancerPool[i].occupation}`;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${freelancerPool[i].startingPrice}`;
    freelancerDiv.appendChild(nameSpan);
    freelancerDiv.appendChild(occSpan);
    freelancerDiv.appendChild(priceSpan);

    freelancers.push(freelancerPool[i]);
    updateAverage();
    i++;
}

const addFreelancerIntervalId = setInterval(() => {
    render();

}, 3000);