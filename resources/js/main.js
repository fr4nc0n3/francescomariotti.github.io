import { getMoonPhase } from "./utility/utility.js";

// set date
const date = document.getElementById("date");
date.innerHTML = new Date().toLocaleDateString();

// set moon phase
const moonPhase = document.getElementById("moon-phase");
const todayMoonPhase = getMoonPhase(new Date());
moonPhase.innerHTML = todayMoonPhase.phase + " " + todayMoonPhase.description;
