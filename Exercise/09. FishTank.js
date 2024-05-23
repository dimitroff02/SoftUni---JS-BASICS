function Fish (Input){

    let lengthCM = Number(Input[0])
    let widthCM = Number(Input[1])
    let heightCM = Number(Input[2])
    let percent = Number(Input[3])

    let aquariumVolume = lengthCM * widthCM * heightCM 
    let litersVolume = aquariumVolume / 1000
    let occupiedSpace = (percent / 100) * litersVolume
     
    

    let litersNeeded = litersVolume - occupiedSpace

    console.log(litersNeeded)

}
Fish(["85","75","47","17"])