var objPeople = [
  {
    username:"charrise",
    password:"shit"
  },
  {
    username:"ron",
    password:"disfuxu2"
  },
  {
    username:"kassie",
    password:"jessica510"
  }
]

//login function
function login(){
// retrive data input from form
var username = document.getElementById("username").value
var password = document.getElementById("password").value

// loop through all the user objects and conferm if the user and password is correct
for(i =0; 1 < objPeople.length; i++){
  if(username == objPeople[i].username && password == objPeople[i].password){
    console.log(username + "is logged in!!!")
    return
  }
}
  //error if username and password do not match
  console.log("try again dumby")

}
