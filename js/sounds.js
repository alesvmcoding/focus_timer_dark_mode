export function Sound({
    buttonFirePlace,
    buttonCoffeShop,
    buttonForest,
    buttonRain,
}){
    const soundForest = new Audio("../sounds/Floresta.wav")
    const soundRain = new Audio("../sounds/Chuva.wav")
    const soundCoffeShop = new Audio("../sounds/Cafeteria.wav")
    const soundFirePlace = new Audio("../sounds/Lareira.wav")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    soundForest.loop = true
    soundRain.loop = true
    soundCoffeShop.loop = true
    soundFirePlace.loop = true

    function resetSounds(){
        soundFirePlace.pause()
        soundCoffeShop.pause()
        soundRain.pause()
        soundForest.pause()
    
        buttonFirePlace.classList.remove('select')
        buttonCoffeShop.classList.remove('select')
        buttonRain.classList.remove('select')
        buttonForest.classList.remove('select')
    }

    function pressButton() {
        buttonPressAudio.play()
    }

    return{
        soundForest,
        soundRain,
        soundCoffeShop,
        soundFirePlace,
        kitchenTimer,
        resetSounds,
        pressButton
    }
}


