const BASE_URL = 'https://api.github.com/users/';
const bgContainer = document.getElementById('colorfulContainer');
const profileBorder = document.getElementById('profilePic');
const newLink = document.getElementById('downloadLink');
const userLogin = document.getElementById("userLogin");
const userTitle = document.getElementById('loginName');
const userTitleA = document.getElementById('loginNameURL');
const popupInfo = document.getElementById('goToGitHub');
const form = document.getElementById('getNewUserForm');
const searchButton = document.getElementById('searchUser');

function getUser(user) {
    axios.get(`${BASE_URL}${user}`)
    .then(response => {
        loginName.textContent = response.data.login
        infoFollowers.textContent = response.data.followers + " Seguidores"
        infoFollowing.textContent = response.data.following + " Seguindo"
        infoRepo.textContent = response.data.public_repos + " Repositórios"
        loginNameURL.href = response.data.html_url
        
        if(response.data.company != null) {infoCompany.textContent = response.data.company}
        else {infoCompany.textContent = "Não informado"}

        if(response.data.location != null) {infoLocation.textContent = response.data.location}
        else {infoLocation.textContent = "Não informado"}

        profilePic.src = response.data.avatar_url
    })
    .catch(error => console.error(error))
}

getUser('GusBordoni')

function getNewUser(user) {
    if(userLogin.value != ""){
        user = userLogin.value
        getUser(user)
    } 
}

function changeBGColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    bgContainer.style.backgroundColor = '#'+randomColor;
    profileBorder.style.border = "10px solid #"+randomColor;
}

function downloadInfo() {
    user = document.getElementById('loginName').innerHTML
    axios.get(`${BASE_URL}${user}`)
    .then(response => {
        let data =  'Name: ' + response.data.login +
                    '\nRepos: ' + response.data.public_repos +
                    '\nLocation: ' + response.data.location +
                    '\nGitHub Profile: ' + response.data.html_url
        const textToBLOB = new Blob([data], { type: 'text/plain' })
        const sFileName = 'cardData.txt'
        
        newLink.download = sFileName
        newLink.href = window.webkitURL.createObjectURL(textToBLOB)
        newLink.click()
    })
    .catch(error => console.error(error))
}

userLogin.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchUser").click();
  }
}); 

userTitleA.addEventListener("mouseenter", async function(event){
    popupInfo.classList.add('show')
})
userTitleA.addEventListener("mouseleave", async function(event){
    popupInfo.classList.remove('show')
})