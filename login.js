var objPeople = [
    {
        user_name: "faisal",
        user_password: "faisal123"
    },
    {
        user_name: "sahrul",
        user_password: "sahrul123"
    }
]

function getInfo() {
    var user_name = document.getElementById("user_name").value
    var user_password = document.getElementById("user_password").value

    for(i = 0; i < objPeople.length; i++) {
        if(user_name == objPeople[i].user_name && user_password == objPeople[i].user_password) {
            window.location.href="home.html"
            return
        }
    }
    alert("incorrect username or password")
}