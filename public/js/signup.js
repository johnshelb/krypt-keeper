const signUpHandler = async (e) => {
    e.preventDefault()
    const username = document.getElementById("username-signup").value.trim()
    const password = document.getElementById("password-signup").value.trim()
    if (username && password) {
        const response = await fetch("/userRoutes/", {
            method: "POST",
            body: JSON.stringify({ username, password}),
            headers: { "Content-Type": "application/json" }
        })
        if (response.ok) {
            document.location.replace("/")
        } else {
            alert(response.statusText)
        }
    }
}
document.querySelector("#signup-form").addEventListener("submit", signUpHandler)
