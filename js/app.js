let button = document.getElementById("btn");

button.addEventListener('click', () =>{

    
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => {
            let d = '';
            data.results.forEach(user => {
                d += `
                  
                <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <img src="${user.picture.medium}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${user.email}</h5>
                      <p class="card-text">${user.name.first}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
                
                `

            })
            document.getElementById("box").innerHTML = d;
        })
        .catch(err => console.error(err));

})
