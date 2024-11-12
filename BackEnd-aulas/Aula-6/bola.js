let a = 0

for(let x = 0; x < 2; x++){
    setInterval(()=>{
        document.getElementById("container").style.transition = "500ms"
        document.getElementById("container").style.top = `${300}px`
        document.getElementById("container").style.filter = `drop-shadow(0px 0px 10px black)`
        document.getElementById("bolinha").style.marginBottom = `0`
        document.getElementById("bolinha").style.transition = "500ms"
        document.getElementById("bolinha").style.marginBottom = `100px`
        document.getElementById("bolinha").style.marginTop = `0px`
    }, 500)
    setInterval(()=>{
        document.getElementById("container").style.transition = "500ms"
        document.getElementById("container").style.top = `${30}px`
        document.getElementById("container").style.filter = `drop-shadow(0px 260px 50px black)`
        document.getElementById("bolinha").style.transition = "500ms"
        document.getElementById("bolinha").style.marginBottom = `0px`
        document.getElementById("bolinha").style.marginTop = `100px`
    }, 1000)
            
}