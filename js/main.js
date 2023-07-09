let  sections = document.getElementsByClassName("sec_container");
let sec_active = sections[0]
let arr_sections = [sections[0], sections[1], sections[2], sections[3]]

const switchSec = (sec) => {
    sec_active.classList.remove("sec_active")
    sec_active = sec
    sec.classList.add("sec_active")
}

arr_sections.forEach(sec => {
    sec.addEventListener('click',() => {
        sec_active != sec ? switchSec(sec) : null 
    })
})

