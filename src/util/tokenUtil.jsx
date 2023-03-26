export const getToken = () => {
    const result = localStorage.getItem("auth")
    const value = JSON.parse(result)
    return value
}