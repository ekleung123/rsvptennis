export const useCreateCalendarObj = (startDate) => {

var startDate = new Date(startDate);
var dateArray = [];

for (let incr = 0; incr < 14; incr++){
  startDate.setDate(startDate.getDate() + 1);
  
  let year = startDate.getFullYear();
  let month = startDate.getMonth() + 1;
  let day = startDate.getDate() -1 ;

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  
  let dateObj = year + "-" + month + "-" + day;
  dateArray.push(dateObj);  
};

let calendarObj = {};
let dotColor = "red";

dateArray.forEach(val => {
  let newKeyValue = {
    [val]: {selected: true, marked: true, selectedColor: dotColor}
  };
  calendarObj = {...calendarObj, ...newKeyValue};
  dotColor = "blue";
});

return calendarObj;
};