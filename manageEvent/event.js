$(document).ready(function () {

    let events = [
        {
            title: "UTAS ICT 2026",
            description: "Two-day developer conference covering AI, cloud infrastructure, and modern web technologies.",
            organiser: "Lakdinie",
            date: new Date("2026-08-05 09:00"),
            status: "Confirmed",
            capacity: "100"
        },
        {
            title: "Hackathon for Beginners",
            description: "Learn foundational coding techniques guided by an experienced developer.",
            organiser: "Ashiqur Rahman",
            date: new Date("2026-08-22 14:00"),
            status: "Draft",
            capacity: "50"

        },
        {
            title: "BBQ Party",
            description: "Join us for a fun-filled evening of grilling and socializing.",
            organiser: "Akila",
            date: new Date("2026-06-03 19:00"),
            status: "Cancelled",
            capacity: "25"
        },
        {
            title: "Marathon Hobart 2026",
            description: "Join us for a challenging run through the beautiful streets of Hobart.",
            organiser: "Celina Shrestha",
            date: new Date("2026-07-12 18:00"),
            status: "Confirmed",
            capacity: "200"
        }
    ]

    // Default: reverse chronological
    events.sort((a, b) => b.date - a.date)

    function renderTable(data) {

        let html = ""

        data.forEach(event => {

            let badgeClass = ""
            if (event.status === "Confirmed") badgeClass = "badge-confirmed"
            if (event.status === "Cancelled") badgeClass = "badge-cancelled"
            if (event.status === "Draft") badgeClass = "badge-draft"

            const formattedDate = event.date.toLocaleString("en-AU", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            }).replace(",", "").toLowerCase()

            html += `
        <tr>
            <td>
                <b>${event.title}</b><br>
                <small class="text-truncate description">${event.description.substring(0, 100)}</small>
            </td>
            <td>${formattedDate}</td>
            <td>${event.organiser}</td>
            <td><span class="badge ${badgeClass}">${event.status}</span></td>
            <td class="text-center">${event.capacity}</td>
            <td>
                <div class="d-flex gap-2 justify-content-center align-items-center">
                    <button class="btn btn-sm text-black btn-text editBtn">Edit</button>
                    <button class="btn btn-sm btn-danger deleteBtn">Delete</button>
                </div>
            </td>
        </tr>
    `
        })

        $("#eventTable").html(html)
    }

    renderTable(events)

    $("#eventTable").on("click", ".editBtn", function () {
        alert("Edit event clicked!")
    })

    $("#eventTable").on("click", ".deleteBtn", function () {
        alert("Event deleted!")
    })

    $("#searchBtn").click(function () {

        let search = $("#searchTitle").val().toLowerCase()
        let status = $("#statusFilter").val()
        let order = $("#sortOrder").val()

        let filtered = events.filter(e => {
            return (
                e.title.toLowerCase().includes(search) &&
                (status === "" || e.status === status)
            )
        })

        filtered.sort((a, b) => {
            return order === "asc" ? a.date - b.date : b.date - a.date
        })

        renderTable(filtered)
    })

    $("#clearBtn").click(function () {
        $("#searchTitle").val("")
        $("#statusFilter").val("")
        $("#sortOrder").val("desc")

        events.sort((a, b) => b.date - a.date)
        renderTable(events)
    })

})