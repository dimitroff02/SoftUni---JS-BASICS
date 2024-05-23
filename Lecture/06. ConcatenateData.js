function ConcData(Input) {

    let firstName = (Input[0]);
    let lastName = (Input[1]);
    let age = Number(Input[2]);
    let city = (Input[3]);

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`);


}
ConcData(["Kristiyan","Dimitrov", "21","Bulgarevo"]);