function switchStyle(style){
    document.getElementById("stylesheet").href = style;
}

const menuButton = document.querySelector('.menu');
const screenMenu= document.querySelector('.screen-menu');
const medalTableCont = document.getElementById('medalTableCont');

menuButton.addEventListener('click', () =>{
    menuButton.classList.toggle('active');
    screenMenu.classList.toggle('active');
});

function toggleMenu()
{
    menuButton.classList.toggle('active');
    screenMenu.classList.toggle('active');
}

const medalData= [

    {rank: 1, country:"People's Republic of China", Gold: 13, Silver: 8, Bronze: 9},
    {rank: 2, country: "France", Gold:11, Silver: 12 ,Bronze: 13},
    {rank: 3, country:"Australia", Gold: 11, Silver: 6, Bronze: 5},
    {rank: 4, country:"United States of America", Gold: 9 , Silver: 18, Bronze: 16},
    {rank: 5, country:" Great Britain", Gold:9, Silver: 10, Bronze: 8},
    {rank: 6, country:"Japan", Gold: 8, Silver: 4, Bronze: 6},
    {rank: 7, country:"Republic of Korea", Gold: 7, Silver: 5, Bronze: 4},
    {rank: 8, country:"Italy", Gold:5, Silver: 8, Bronze: 4},
    {rank: 9, country:"Netherlands", Gold: 4,Silver:3, Bronze: 2},
    {rank: 10, country:"Canda",Gold: 3, Silver: 2, Bronze: 6},
];

function createMedalTable(data){
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ['Rank', 'Name of country', 'Gold Medals', 'Silver Medals', 'Bronze Medals', 'Total Medals'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
        
    });

    thead.appendChild(headerRow);

    data.forEach(item =>{
        const row = document.createElement('tr');

        const rankCell = document.createElement('td');
        rankCell.textContent = item.rank;
        row.appendChild(rankCell);


        const countryCell = document.createElement('td');
        countryCell.textContent = item.country;
        row.appendChild(countryCell);

        const goldCell = document.createElement('td');
        goldCell.textContent = item.Gold;
        row.appendChild(goldCell);

        const silverCell = document.createElement('td');
        silverCell.textContent = item.Silver;
        row.appendChild(silverCell);

        const bronzeCell = document.createElement('td');
        bronzeCell.textContent = item.Bronze;
        row.appendChild(bronzeCell);

        const totalCell = document.createElement('td');
        totalCell.textContent = item.Gold + item.Silver + item.Bronze;
        row.appendChild(totalCell);

        tbody.appendChild(row);
    })
    
    table. appendChild(thead);
    table.appendChild(tbody);
    return table;
}


const medalTable = createMedalTable(medalData);
medalTableCont.appendChild(medalTable);


function createCalendar(){
    const calendarCont = document.querySelector('.calendar');
    const days = ['M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun'];
    const dates =[
        '24 JUL','25 JUL','26 JUL','27 JUL','28 JUL','29 JUL','30 JUL',
        '31 JUL','1 AUG','2 AUG','3 AUG','4 AUG','5 AUG','6 AUG','7 AUG', '8 AUG',
        '9 AUG','10 AUG','11 AUG'

    ];

    const sportSchedule ={
        '24 JUL':['Football','Rugby'],
        '25 JUL':['Football', 'Hanball','Rugby'],
        '26 JUL':['Open Ceremony'],
        '27 JUL':['Fencing','Hockey','Judo','Rowing', 'Volleyball'],
        '28 JUL':['Archey','Fencing','Handball','Rowing','Swimming', 'Beach Volleyball'],
        '29 JUL':['Hockey','Fencing','Handball','Judo','Water Polo'],
        '30 JUL':['Basketball','Tennis','Rowing','Swimming', 'Volleyball'],
        '31 JUL':['Basketball','Football','Hockey','Swimming', 'Triathlon'],
        '1 AUG':['Golf','Football','Hockey','Rowing','Swimming', 'Water Polo'],
        '2 AUG':['Beach Volleyball','Football','handball','Rowing','Swimming'],
    };

    days.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;
        calendarCont.appendChild(dayDiv);
    });

    for(let i=0; i<2; i++){
        const emptyDiv= document.createElement('div');
        emptyDiv.classList.add('empty');
        calendarCont.appendChild(emptyDiv);
    }

    dates.forEach(date => {
        const dateDiv =document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = date;

        const sportsList = document.createElement('ul');
        sportsList.classList.add('sports-list');
        const sports = sportSchedule[date] || [];
        sports.forEach(sport => {
            const sportItem = document.createElement('li');
            sportItem.textContent = sport;
            sportsList.appendChild(sportItem);
        });
            dateDiv.appendChild(sportsList);
            calendarCont.appendChild(dateDiv);
    });
};

document.addEventListener('DOMContentLoaded',()=>{
    createCalendar();
})