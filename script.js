

let Amar = {

    name: "amar",
    superpower: "singer",

   
};

let Akbar ={
    
    name: "akbar",
    superpower: "chef",
};

let Anthony ={
    
    name: "anthony",
    superpower: "Magician",
};

function superskill(){
    console.log(`${this.name} have the skill of  ${this.superpower} `)
}


superskill.call(Anthony);