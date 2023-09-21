const b_back = document.getElementById("b_back")
const b_up = document.getElementById("b_up")
const b_delete = document.getElementById("b_delete")

b_back.addEventListener("click", () => {
    alert("Volviendo al inicio"); 
})

b_up.addEventListener("click", () => {
    alert("Post creado"); 
})

b_delete.addEventListener("click", () => {
    alert("Post eliminado"); 
})