import { Sound } from "./sounds.js"
import { Timer } from "./timer.js"
import { Events } from "./events.js"
import {
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

const sounds = Sound({
    buttonFirePlace,
    buttonCoffeShop,
    buttonForest,
    buttonRain
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetSounds: sounds.resetSounds,
})

Events({timer, sounds})
