//class selector assigned to a constant varible
const panels = document.querySelectorAll('.panel')

//For each loop
panels.forEach(panel => {
    //User clicks mouse
    panel.addEventListener('click', () => {
        //Calls custom function
        removeActiveClasses()
        //Adds a value to classList
        panel.classList.add('active')
    })
})
//Created a function
function removeActiveClasses() {
    //For each loop
    panels.forEach(panel => {
        //Removes a value from classList
        panel.classList.remove('active')
    })
}