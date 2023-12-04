//MILESTONE 0
let employees = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

//MILESTONE 1
//dichiaro ciclo per elementi dell'array
for(let i=0; i<employees.length; i++){
    for(let key in employees[i]){
        console.log(employees[i][key]);

        //MILESTONE 2
        /* let container = document.getElementById('content');
        container.innerHTML += `<li>${employees[i][key]}</li>`; */

    }
}
let container_card = document.getElementById('cards');
container_card.classList.add('row')
//BONUS 1
for(let i=0; i<employees.length; i++){
    
    let image = employees[i].image;
    image = `<img src="./img/${employees[i].image}" alt="image"></img>`
    console.log(image);
    
    //BONUS 2
    let col = document.createElement('div');
    col.classList.add('col-4');
    col.classList.add('py-3')

    let card = document.createElement('div');
    card.classList.add('card');

    let name = `<h2>${employees[i].name}</h2>`;
    let role = `<h2>${employees[i].role}</h2>`;
    card.innerHTML += image + '<br>' + name + '<br>' + role;

    col.appendChild(card);
    container_card.appendChild(col);

}


