var today = new Date();

var day = today.getDay();

var dayList = ["sunday","monday","tuesday","wednesday","Thursday","friday","saturday"];
console.log(dayList[day]);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12 ? "pm" : "am"); // 24 hour format.

hour = (hour >= 12) ? hour - 12 : hour;// converting 24 hour format to 12 hour format.

// special cases when hour is 0;

if(hour ===0 && prepand === 'pm')
{
    if(minute === 0 && second ===0)
    {
        hour = 12;
        prepand = 'noon';
    }
    else
    {
        hour = 12;
        prepand = 'pm';
    }
}

if(hour === 0 && prepand === "am")
{
    if(minute === 0 && second === 0)
    {
        hour = 12;
        prepand = 'midnight';
    }
    else
    {
        hour = 12;
        prepand = 'am';
    }
}

console.log(hour + " " + prepand + " : " + minute + " : " + second);




