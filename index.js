class Freelancer{
    constructor(name, occupation, startingPrice){
        this.name = name;
        this.occupation = occupation;
        this.startingPrice = startingPrice;
    }
}
const freelancers=[
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 }
]

const freelancerPool = []
freelancerPool.push(new Freelancer(`Bob`, `Teacher`, 50));
freelancerPool.push(new Freelancer(`Carol`, `Programmer`, 70));
freelancerPool.push(new Freelancer(``, `Doctor`, ));
freelancerPool.push(new Freelancer(``, `Driver`, ));
freelancerPool.push(new Freelancer(``, `Nurse`, ));
freelancerPool.push(new Freelancer(``, `Therapist`, ));
freelancerPool.push(new Freelancer(``, `Real Estate Agent`, ));
freelancerPool.push(new Freelancer(``, `Truck Driver`, ));
freelancerPool.push(new Freelancer(``, `Tutor`, ));
freelancerPool.push(new Freelancer(`Karen`, `Personal Trainer`, ));
freelancerPool.push(new Freelancer(``, `Executive Assistant`, ));
console.log(freelancerPool);

let i = 0;

function updateAverage(){
let sum = freelancers.reduce((sum, free) => sum + free.startingPrice, 0);
// free= goes through each indv free // 
let avg = sum / freelancers.length;
//avg = Math.floor(avg * 100)/100;//
const avgDisplay = document.querySelector('#averageStartingPrice');
avgDisplay.innerText = avg
}

function render(){
if( i == freelancerPool.lenghth){
    clearInterval(addFreelancerIntervalId);
}
const table = document.querySelector("table");
const freelancerDiv = document.createElement("div");
freelancerDiv.classList
}