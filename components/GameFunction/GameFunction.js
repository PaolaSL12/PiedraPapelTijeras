
import { paperRockScissors } from '../data/paperRockScissors'
import './GameFunction.css'


export let UserCount = localStorage.getItem("USER") || 0;
export let CpuCount = localStorage.getItem("CPU") || 0;

export let GameFunction = (selection) => {
    let selectionCpu = Math.floor(Math.random() * 3);
    let cpuSelection = paperRockScissors[selectionCpu].name;

    let result = "";

    if (selection === "Piedra") {
        if (cpuSelection === selection) {
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
    } else if (selection === "Papel") {
        if (cpuSelection === selection) {
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
    } else if (selection === "Tijeras") {
        if (cpuSelection === selection) {
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

