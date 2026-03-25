document.addEventListener("DOMContentLoaded", function () {

    fetch("../navigation/index.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data

            const links = document.querySelectorAll(".nav-link")
            const currentPage = window.location.pathname.split("/").pop()

            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.style.color = "#2ec4b6"
                    link.style.fontWeight = "600"
                }
            })
        })

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "../navigation/style.css"
    document.head.appendChild(link)

})