function gameStart(){

    let petPlayerButton = document.getElementById("button-pet")
    petPlayerButton.addEventListener("click", selectPetPlayer)
}


function selectPetPlayer(){

    if(document.getElementById('Hipodoge').checked){
    alert("you have chosen Hipodoge")
    } else if(document.getElementById('Capipepo').checked){
        alert("you have chosen Capipepo")
    } else if(document.getElementById('Ratigueya').checked){
        alert("you have chosen Ratigueya")
     } else if(document.getElementById('Ratigueya').checked){
        alert("you have chosen Ratigueya")
     } else if(document.getElementById('langostelvis').checked){
        alert("you have chosen langostelvis")
     }else if(document.getElementById('Tucapalma').checked){
        alert("you have chosen Tucapalma")
     }else if(document.getElementById('Pydos').checked){
        alert("you have chosen Pydos")
     }

    
}


window.addEventListener("load", gameStart)