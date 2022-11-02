let dvQ = document.getElementById("squ");

function make(){
    for(let i=0; i < 10; i++){
        let ran = Math.floor(Math.random()*i);
dvQ.innerHTML = ran;
    }
}