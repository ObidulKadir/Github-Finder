let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
let github = new Github;



searchBtn.addEventListener('click',(e) => {
    let userText = searchUser.value ;
    if(userText != ''){
       github.getUser(userText)
            
            .then(data => {
                if(data.profile.message == 'Not Found'){
                    
                    ui.showAlert("Not Found", 'alert bg-danger text-light')

                }else{
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)

                  
                    
                }
            })
            
    }else{
        // clear profile
        ui.clearProfile();
    }
})
