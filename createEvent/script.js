document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("createEventForm")

    // Input fields
    const eventTitle = document.getElementById("title")
    const eventDescription = document.getElementById("description")
    const startDate = document.getElementById("startDate")
    const endDate = document.getElementById("endDate")
    const eventLocation = document.getElementById("location")
    const capacity = document.getElementById("capacity")
    const price = document.getElementById("price")
    const status = document.getElementById("status")

    // Error fields
    const titleError = document.getElementById("titleError")
    const descriptionError = document.getElementById("descriptionError")
    const startDateError = document.getElementById("startDateError")
    const endDateError = document.getElementById("endDateError")
    const locationEventError = document.getElementById("locationError")
    const capacityError = document.getElementById("capacityError")
    const priceError = document.getElementById("priceError")
    const statusError = document.getElementById("statusError")

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let valid = true

        // Validation
        if (eventTitle.value.trim() === "") {
            titleError.textContent = "Event title is required."
            eventTitle.classList.add("is-invalid")
            valid = false
        }

        if (eventDescription.value.trim() === "") {
            descriptionError.textContent = "Description is required."
            eventDescription.classList.add("is-invalid")
            valid = false
        }

        if (startDate.value === "") {
            startDateError.textContent = "Start date & time is required."
            startDate.classList.add("is-invalid")
            valid = false
        }

        if (endDate.value === "") {
            endDateError.textContent = "End date & time is required."
            endDate.classList.add("is-invalid")
            valid = false
        } else if (startDate.value && endDate.value && new Date(endDate.value) <= new Date(startDate.value)) {
            endDateError.textContent = "End date must be after start date."
            endDate.classList.add("is-invalid")
            valid = false
        }

        if (eventLocation.value.trim() === "") {
            locationError.textContent = "Location is required."
            eventLocation.classList.add("is-invalid")
            valid = false
        }

        if (capacity.value.trim() === "" || Number(capacity.value) <= 0) {
            capacityError.textContent = "Capacity must be a positive number."
            capacity.classList.add("is-invalid")
            valid = false
        }

        if (price.value.trim() === "" || Number(price.value) < 0) {
            priceError.textContent = "Price must be 0 or higher."
            price.classList.add("is-invalid")
            valid = false
        }

        if (status.value === "") {
            statusError.textContent = "Status is required."
            status.classList.add("is-invalid")
            valid = false
        }

        if (!valid) return

        // Successful creation
        alert("Event created successfully!")
        form.reset()

        // Redirect to events page (adjust path to your project structure)
        window.location.href = "../manageEvent/index.html"
    })

    form.addEventListener("reset", function () {
        [titleError, descriptionError, startDateError, endDateError, locationEventError, capacityError, priceError, statusError].forEach(e => e.textContent = "")
        [eventTitle, eventDescription, startDate, endDate, eventLocation, capacity, price, status].forEach(e => e.classList.remove("is-invalid"))
    })
})