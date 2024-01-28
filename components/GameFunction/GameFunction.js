
import { paperRockScissors } from '../data/paperRockScissors'
import './GameFunction.css'


export let UserCount = localStorage.getItem("USER") || 0;
export let CpuCount = localStorage.getItem("CPU") || 0;

export let GameFunction = (selection) => {
    let selectionCpu = Math.floor(Math.random() * 3);
    let cpuSelection = paperRockScissors[selectionCpu].name;

    const selectionContainer = document.querySelector(".selection");
    selectionContainer.innerHTML = "";

    const divselectionCpu = document.createElement("div");
    const selectionCpuImg = document.createElement("img");

    const divselectionUser = document.createElement("div");
    const selectionUserImg = document.createElement("img");

    divselectionCpu.className = "divselectionCpu";
    divselectionUser.className = "divselectionCpu";
    selectionCpuImg.src = `${paperRockScissors[selectionCpu].img}`;
    selectionUserImg.src = selection.img

    console.log(selectionCpuImg);

    divselectionUser.append(selectionUserImg);
    divselectionCpu.append(selectionCpuImg);
    selectionContainer.append(divselectionUser);
    selectionContainer.append(divselectionCpu);


    let result = "";

    if (selection.name === "Piedra") {
        if (cpuSelection === selection.name) {
            result = "Empate, intente de nuevo.";
        } else if (cpuSelection === "Papel") {
            result = "Papel gana a Piedra. Punto para CPU.";
            CpuCount++;
            localStorage.setItem("CPU", `${CpuCount}`)
            
        } else if (cpuSelection === "Tijeras") {
            result = "Piedra gana a Tijeras. Punto para USER.";
            UserCount++;
            localStorage.setItem("USER", `${UserCount}`)
        }
    } else if (selection.name === "Papel") {
        if (cpuSelection === selection.name) {
            result = "Empate, intente de nuevo.";
        } else if (cpuSelection === "Tijeras") {
            result = "Tijeras ganan a Papel. Punto para CPU.";
            CpuCount++;
            localStorage.setItem("CPU", `${CpuCount}`)
            
        } else if (cpuSelection === "Piedra") {
            result = "Papel gana a Piedra. Punto para USER.";
            UserCount++;
            localStorage.setItem("USER", `${UserCount}`)
        }
    } else if (selection.name === "Tijeras") {
        if (cpuSelection === selection.name) {
            result = "Empate, intente de nuevo.";
        } else if (cpuSelection === "Piedra") {
            result = "Piedra gana a Tijeras. Punto para CPU.";
            CpuCount++;
            localStorage.setItem("CPU", `${CpuCount}`)
            
        } else if (cpuSelection === "Papel") {
            result = "Tijeras ganan a Papel. Punto para USER.";
            UserCount++;
            localStorage.setItem("USER", `${UserCount}`)
        }
    }

    return result;
};

