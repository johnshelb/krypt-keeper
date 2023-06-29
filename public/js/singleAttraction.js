async function addToFaves(e) {
    e.preventDefault()
    console.log(e.target)
    const title = e.target.dataset.title
    const description = e.target.dataset.desc
    const price = e.target.dataset.price
    const date = e.target.dataset.date
    const address = e.target.dataset.address
    try {
        const response = await fetch("/api/events/", {
            method: "POST",
            body: JSON.stringify({title, description, price, date, address}),
            headers: {
                "Content-Type": "application/json"
            }

        })
        console.log(response)
        const data = await response.json()
        console.log(data)
        //redirect user to faves
    } catch (error) {
        console.log(error)
    }
}

document.querySelector("#faveBtn").addEventListener("click", addToFaves)