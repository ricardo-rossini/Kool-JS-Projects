const APIURL = "https://api.github.com/users/";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser("ricardo-rossini");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
    getRepos(username);
}

async function getRepos(username) {
    const resp = await fetch(APIURL + username);
    
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div class="img-container">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</P>

                <ul class="info">
                    <li><i class="far fa-eye"></i>${user.followers}</li>
                    <li><i class="far fa-user-circle"></i>${user.following}</li>
                    <li><i class="far fa-folder-open"></i>${user.public_repos}</li>
                </ul>
            </div>
            <ul class="repos" id="repos">

            </ul>
        </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;
    
    if(user) {
        getUser(user);
        search.value = '';
    }
});
