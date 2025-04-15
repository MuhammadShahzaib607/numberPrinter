const printBtn = document.querySelector(".print")
const container = document.querySelector(".container")
const input = document.querySelector("#input")

input.addEventListener("input", ()=> {
        container.innerHTML = ""
    if(input.value > 10000) {
        const div = document.createElement("div")
        div.classList.add("warning")
        div.innerHTML = `That's too many! Please enter a number less than ${input.value}`
        container.appendChild(div) 
    }
    // That's too many! Please enter a number less than
})



printBtn.addEventListener("click", ()=> {
    container.innerHTML = ""
    if(input.value === "") {
        const div = document.createElement("div")
        div.classList.add("warning")
        div.innerHTML = "Missing field!"
        container.appendChild(div) 
        return
    }

if (!/^\d*$/.test(input.value)) {
    const div = document.createElement("div")
    div.classList.add("warning")
    div.innerHTML = "Please enter numbers only!"
    container.appendChild(div)  

    return input.value = ""
}

    let printer = Array(parseInt(input.value) + 1).fill(0)
    console.log (input.value)   
    console.log (printer)
    input.value = ""

    printer.forEach((item, indexNum)=> {
        const div = document.createElement("div")
        div.innerHTML = indexNum
        container.appendChild(div)  
    })
})