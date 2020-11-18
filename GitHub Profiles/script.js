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
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();

    addReposToCard(respData);
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    console.log(repos);
    repos.forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
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
                <h4>Repos:</h4>
                <div id="repos">
                </div>
            </div>
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
