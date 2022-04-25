function reader(){
    return parseInt(document.getElementById('counter').innerText)
}

function autoCounter(){
    const screenCounter = document.getElementById('counter')
    setInterval(() => {
        screenCounter.innerHTML = reader() + 1
    },1000)
}

function manualControl(){
    document.getElementById('plus').addEventListener('click', () => {
        document.getElementById('counter').innerText = reader() + 1
    })

    document.getElementById('minus').addEventListener('click', () => {
        document.getElementById('counter').innerText = reader() - 1
    })
}

function liker(){
    document.getElementById('heart').addEventListener('click', () => {
        // call reader() & assign to a var
        let check = reader()
        // if get element by id reader() === null
            // make element with ID reader() and append to UL
            // innerHTML will equal `${reader()} has been liked 1 time`
        //console.log(check)
        if (document.getElementById(`${check}`) == null){
            const newLI = document.createElement('li')
            newLI.innerText = (`${reader()} has been liked 1 time`)
            newLI.id = (`${check}`)
            const mainUL = document.querySelector('.likes')
            mainUL.append(newLI)
        } else{
            const likeCounts = document.getElementById(`${check}`)
            let splitArr =  likeCounts.innerText.split(" ")
            let arrInt = parseInt(splitArr[4])
            splitArr[4] = (arrInt += 1)
            likeCounts.innerText= splitArr.join(' ')

            // get inner text of the coorisponding LI
            // change it to an array [using split(string, " ")]
            // jake = parseInt(splitString[4]) & set to jake += 1
        }
        // else
            // stringArr = document.getelementbyID('reader()').innerText
            // likesSum = parseInt(stringArr[4])
            // document.getelementbyID('reader()').innerText = `${reader()} has been liked ${likesSum} timeS`
    })
}
manualControl()
autoCounter()
liker()