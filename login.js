async function saveLoginData() {
    let data = await fetch('https://dummyjson.com/users');
    let json = await data.json()

    let dataArray = json.users;
     for(let i =0;i <dataArray.length-1;i++) {
        // console.log(dataArray[i].password)
        let userName = document.getElementById('userName');
    let userNameError = document.getElementById('userNameError');
    let userPassword = document.getElementById('userPassword');
    let userPasswordError = document.getElementById('userPasswordError');

        if (userName.value !== dataArray[i].username) {
                userNameError.innerHTML = 'User Name is Incorrect';
                if (userPassword.value !== dataArray[i].password) {
                    userPasswordError.innerHTML = 'User Password are Incorrect';
                }
            } else {
                if (userPassword.value !== dataArray[i].password) {
                    userPasswordError.innerHTML = 'User Password is Incorrect';
                } else {
                    window.location.replace('home.html');
                }
            }

    }

}
