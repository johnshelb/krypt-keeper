const logout = async () => {
    const response = await fetch("/userRoutes/logout", {method: "POST", headers: {"Content-Type": "application/json"}})
    document.location.replace("/")
}

document.getElementById("logout").addEventListener("click", logout)
