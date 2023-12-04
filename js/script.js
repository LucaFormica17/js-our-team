//MILESTONE 0
let employees = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'wayne-barnet-founder-ceo.jpg'
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-designer.jpg'
    }
];

//MILESTONE 1
//dichiaro ciclo per elementi dell'array
for(let i=0; i<employees.length; i++){
    for(let key in employees[i]){
        console.log(employees[i][key]);
    }
}