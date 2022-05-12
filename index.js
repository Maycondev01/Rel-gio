const deg = 6; // Variável imútavel recebe número 6
const hr = document.querySelector('#hr'); // Seletor de consulta ID - HR do HTML
const mn = document.querySelector('#mn'); // Seletor de consulta ID - MN do HTML
const sc = document.querySelector('#sc'); // Seletor de consulta ID - SC do HTML

setInterval(() => { 
    let dia = new Date();
    let hh = dia.getHours() * 30; // Obtém as horas de um Ojbeto DATE, usando a hora local. * 30
    let mm = dia.getMinutes() * deg; // Obtém os minutos de um objeto Date, usando a hora local. * 6
    let ss = dia.getSeconds() * deg; // Obtém os minutos de um objeto Date, usando a hora local.* 6

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`; 
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

})