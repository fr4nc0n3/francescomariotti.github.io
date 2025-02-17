import { MOON_PHASES } from "../constants.js";

const moonCycleDays = 29.53059;
const newMoonKnownDate = new Date("2025-01-29");

/*
 * La fase lunare e' determinata a partire da newMoonKnownDate
 * e la funzione vale solo per date > newMoonKnownDate
 */
export function getMoonPhase(date) {
    const days = millisToDays(date.getTime() - newMoonKnownDate.getTime());

    let phaseIdx =
        Math.round(
            ((days % moonCycleDays) / moonCycleDays) * MOON_PHASES.length
        ) % MOON_PHASES.length;

    return MOON_PHASES[phaseIdx];
}

const millisecondsInADay = 24 * 60 * 60 * 1000;
const millisToDays = (milliseconds) => milliseconds / millisecondsInADay;
