let myLeap = ""

let inputEl = document.getElementById("input-el")
let yearBtn = document.getElementById("year-btn")

yearBtn.addEventListener("click", function() {
  myLeap = inputEl.value
if ( yearBtn % 4===0)
if ( yearBtn % 100===0)
if (yearBtn % 400===0)
else {
return "not leap year"
}
else{
return "leap year"
}
})