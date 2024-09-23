const PI = 3.1415;
radius = 5;
const area = PI * radius * radius;
const plantSpace = 0.8;

MaxPlantCount = (area / plantSpace);

// console.log (MaxPlantCount);

let plantCountWeek1 = 20;
let plantCountWeek2 = 40;
let plantCountWeek3 = 80;

if (plantCountWeek1 > (MaxPlantCount*0.8)){
    console.log("Pruned");
} else if ((plantCountWeek1 > (MaxPlantCount*0.5)) && (plantCountWeek1 < (MaxPlantCount*0.8))){
    console.log("Monitored");
} else {
    console.log("Planted");
}


if (plantCountWeek2 > (MaxPlantCount*0.8)){
    console.log("Pruned");
} else if ((plantCountWeek2 > (MaxPlantCount*0.5)) && (plantCountWeek2 < (MaxPlantCount*0.8))){
    console.log("Monitored");
} else {
    console.log("Planted");
}


if (plantCountWeek3 > (MaxPlantCount*0.8)){
    console.log("Pruned");
} else if ((plantCountWeek3 > (MaxPlantCount*0.5)) && (plantCountWeek3 < (MaxPlantCount*0.8))){
    console.log("Monitored");
} else {
    console.log("Planted");
}