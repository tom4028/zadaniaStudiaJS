let daysArray = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];

function ileDoPiatku(){
    let t = new Date();
    let day = t.getDay();
    let liczbaDni = 5-day;
    if(liczbaDni ===0){
        return "Dzisaj jest piątek";
    }else{
    return "Do piątku pozostało: "+liczbaDni+" dni";
    }
};
console.log(ileDoPiatku());
