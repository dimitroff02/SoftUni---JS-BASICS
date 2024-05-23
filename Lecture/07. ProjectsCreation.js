function ProjectsCreation(Input) {


let architectName = (Input[0]);
let projectsNumber = Number(Input[1]);
let hours = projectsNumber * 3




console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectsNumber} project/s. `);



}
ProjectsCreation(["George","4"]);