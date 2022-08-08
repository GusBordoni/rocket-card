const BASE_URL = 'https://api.github.com/users/';
const bgContainer = document.getElementById('colorfulContainer');
const profileBorder = document.getElementById('profilePic');

function getUser() {
    axios.get(`${BASE_URL}GusBordoni`)
    .then(response => {
        loginName.textContent = response.data.login
        infoFollowers.textContent = response.data.followers + " Seguidores"
        infoFollowing.textContent = response.data.following + " Seguindo"
        infoRepo.textContent = response.data.public_repos + " Repositórios"
        infoLocation.textContent = response.data.location
        infoCompany.textContent = response.data.company
        profilePic.src = response.data.avatar_url
    })
    .catch(error => console.error(error))
}

getUser()

function changeBGColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    bgContainer.style.backgroundColor = '#'+randomColor;
    profileBorder.style.border = "10px solid #"+randomColor;
}