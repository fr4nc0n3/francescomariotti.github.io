import { getMoonPhase } from "./utility.js";
import { IDX_FULL_MOON, IDX_NEW_MOON, MOON_PHASES } from "./constants.js";

console.log("[start tests]");

console.assert(
    getMoonPhase(new Date("2025-02-28")) === MOON_PHASES[IDX_NEW_MOON]
);

console.assert(
    getMoonPhase(new Date("2025-03-29")) === MOON_PHASES[IDX_NEW_MOON],
    MOON_PHASES[IDX_NEW_MOON],
    getMoonPhase(new Date("2025-03-29"))
);

console.assert(
    getMoonPhase(new Date("2025-05-27")) === MOON_PHASES[IDX_NEW_MOON],
    MOON_PHASES[IDX_NEW_MOON].phase,
    getMoonPhase(new Date("2025-05-27")).phase
);

console.assert(
    getMoonPhase(new Date("2025-02-12")) === MOON_PHASES[IDX_FULL_MOON],
    MOON_PHASES[IDX_FULL_MOON].phase,
    getMoonPhase(new Date("2025-02-12")).phase
);

console.assert(
    getMoonPhase(new Date("2025-06-25")) === MOON_PHASES[IDX_NEW_MOON],
    MOON_PHASES[IDX_NEW_MOON].phase,
    getMoonPhase(new Date("2025-06-25")).phase
);

console.assert(
    getMoonPhase(new Date("2025-07-24")) === MOON_PHASES[IDX_NEW_MOON],
    MOON_PHASES[IDX_NEW_MOON].phase,
    getMoonPhase(new Date("2025-07-24")).phase
);
