 async function addToFaves() {
    try {
        const response = await fetch("/userRoutes/faves", {
            method: "POST",
            body: JSON.stringify({eventId:this.dataset.event_id, userId:this.dataset.user_id}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        document.location.replace('/userRoutes/faves')
    } catch (error) {
        console.log(error)
        document.location.replace('/login')
    }
}

Array.from(document.querySelectorAll('.fave')).forEach(el=>el.addEventListener("click", addToFaves))
