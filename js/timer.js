import { Sound } from "./sounds.js"

const sounds = Sound({
})

export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetSounds
}){
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function incrementMinutes(){
        updateMinutes(minutes = (minutes + 5))
        updateDisplay(minutes)
    }

    function decrementMinutes(){
        if(minutes > 0){
            updateMinutes(minutes = (minutes - 5))
            updateDisplay(minutes)
        }
    }
    
    function countDown(){
       timerTimeOut = setTimeout(function(){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            updateDisplay(minutes, 0)
    
            if(isFinished){
                reset()
                resetSounds()
                sounds.kitchenTimer.play()
                return
            }
    
            if(seconds <= 0){
    
                seconds = 2
    
                updateDisplay(--minutes)
            }
    
            updateDisplay(minutes, --seconds)
    
            countDown()
    
        }, 1000)
    }
    
    function reset() {
        clearTimeout(timerTimeOut)
        updateDisplay()
    }

    return{
        updateDisplay,
        updateMinutes,
        countDown,
        reset,
        incrementMinutes,
        decrementMinutes
    }

}