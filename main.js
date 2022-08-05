const BASE_URL = 'https://api.github.com/users/';

function getUser() {
    axios.get(`${BASE_URL}GusBordoni`)
    .then(response => {
        console.log("User: " + response.data.name)
        console.log("Seguidores: " + response.data.followers)
        console.log("Seguindo: " + response.data.following)
        console.log("Local: " + response.data.location)
        console.log("Empresa: " + response.data.company)
        console.log("Avatar: " + response.data.avatar_url)
    })
    .catch(error => console.error(error))
}

// getUser()