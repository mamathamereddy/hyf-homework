class gitRepo {
  constructor (users) {
    this.users = users;
  }

  getUserRepo () {
    return this.users
      .map (user => 'https://api.github.com/search/repositories?q=user:' + user)
      .map (url => fetch (url).then (response => response.json ()));
  }

  renderUserRepo () {
    Promise.all (this.getUserRepo ()).then (results => {
      results.forEach (user => {
        //console.log (user);

        const result = document.getElementById ('result');
        const ul = document.createElement ('ul');
        result.appendChild (ul);

        const li = document.createElement ('li');
        ul.appendChild (li);
        li.innerHTML =user.items[0].owner.login.charAt (0).toUpperCase () +user.items[0].owner.login.slice (1);

        const innerUl = document.createElement ('ul');
        li.appendChild (innerUl);

        user.items.forEach (repo => {
          let repoLi = document.createElement ('li');
          innerUl.appendChild (repoLi);
          repoLi.innerHTML = repo.name + ' : ' + repo.html_url;
        });
      });
    });
  }
}

const gitRepo1 = new gitRepo (['cecastosic', 'MirSzabo', 'sowmya1408']);
gitRepo1.renderUserRepo ();

/* const gitRepo2 = new gitRepo (['Sreelatha-Vallabhaneni','gizemcandemir','mamathamereddy']); 
gitRepo2.renderUserRepo (); */
