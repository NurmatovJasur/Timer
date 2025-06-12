let day = document.querySelector('.day-num')
let hours = document.querySelector('.hours-num')
let minute = document.querySelector('.minute-num')
let second = document.querySelector('.second-num')

function timer (){
    let data = new Date().getFullYear()

    let newYear = new Date(`1 Jan ${data + 1} 00:00`)

    let today = new Date()

    let dis = newYear - today
    let d = Math.floor(dis / 1000 / 60 / 60 / 24)
    let h = Math.floor((dis / 1000 / 60 / 60) % 24)
    let m = Math.floor((dis / 1000 / 60) % 60)
    let s = Math.floor((dis / 1000 ) % 60)


    day.innerHTML = d
    hours.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
    setInterval(() => timer(),1000)
}
timer()