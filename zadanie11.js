function polishDay(){
    let daysArray = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
    let d = new Date();
    let weekDay = d.getDay();
    switch(weekDay){
        case 0:
            weekDay = daysArray[0];
            break;
        case 1:
            weekDay = daysArray[1];
            break;
        case 2:
            weekDay = daysArray[2];
            break;
        case 3:
            weekDay = daysArray[3];
            break;
        case 4:
            weekDay = daysArray[4];
            break;
        case 5:
            weekDay = daysArray[5];
            break;
        case 6:
            weekDay = daysArray[6];
            break;
        default:
            return "Weekand has only 7 days";
    }
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return weekDay;
};
console.log(polishDay());
