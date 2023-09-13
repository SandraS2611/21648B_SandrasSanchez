const container = document.getElementById("container")

fetch("http://localhost:2023/places")
     .then(res => res.json())
     .then(data => {
        container.innerHTML = data.map(e => `<p>${e.location}<p>`).join("")
     })