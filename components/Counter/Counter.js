
import { CpuCount, UserCount } from '../GameFunction/GameFunction';
import './Counter.css'


export const printCounter = () => {
    

    const container = document.querySelector(".container")
    container.innerHTML = "";

    const divCounter = document.createElement("div");
    const user = document.createElement("p");
    const boxCounter = document.createElement("div");
    const counter = document.createElement("p");
    const compu = document.createElement("p");

    divCounter.className = "divCounter"
    boxCounter.className = "counter";
    
  
    counter.textContent = `${UserCount}:${CpuCount}`;

    user.textContent = "USER";
    compu.textContent = "CPU";

    boxCounter.append(counter)
    divCounter.append(user);
    divCounter.append(boxCounter);
    divCounter.append(compu);

    container.append(divCounter);
}

