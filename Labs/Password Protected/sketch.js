let use = document.getElementById("user");
let pas = document.getElementById("pass");
let dvOu = document.getElementById("dvO");

function checking(){
    if((use.value == "Username") && (pas.value == "Password")){
dvOu.innerHTML = "Success";
    } else {
dvOu.innerHTML = "Wrong Information";
    }
}