function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
       am_pm="PM" 
    if(hh>=13)
    {
        hh-=12;
    }
    }
   if(hh==0)
{
    hh=12;
}
var fullTime=`${hh}:${mm}:${am_pm}`
document.getElementById("Time").innerHTML=fullTime;
if(mo==0)
{
  mo="JANUARY"  
}
else if(mo==1)
{
    mo="FEBRUARY"
}
else if(mo==2)
{
    mo="MARCH"
}
else if(mo==3)
{
    mo="APRIL"
}
else if(mo==4)
{
    mo="MAY"
}
else if(mo==5)
{
    mo="JUNE"
}
else if(mo==6)
{
    mo="JULY"
}
else if(mo==7)
{
    mo="AUGUESR"
}
else if(mo==8)
{
    mo="SEPTEMBER"
}
else if(mo==9)
{
    mo="OCTOBER"
}
else if(mo==10)
{
    mo="NOVEMBER"
}
else{
    mo="DECEMBER"
}
var fulldate=`${dd}-${mo}-${yy}`
document.getElementById("Date").innerHTML=fulldate;

switch(day)
{
    case 0:
        day="SUNDAY"
        document.body.style.backgroundImage="url(sunday.jpg)"
        break;
        case 1:
            day="MONDAY"
            document.body.style.backgroundImage="url(monday.webp)"
            
            break;
            case 2:
                day="TUESDAY"
                document.body.style.backgroundImage="url(tuesday.jpeg)"
                
                break;
                case 3:
                    day="WEDNESDAY"
                    document.body.style.backgroundImage="url(wednesday.jpg)"
                  
                    break;
                    case 4:
                        day="THURSADAY"
                        document.body.style.backgroundImage="url(thursaday.jpg)"
                       
                        break;
                        case 5:
                            day="FRIDAY"
                            document.body.style.backgroundImage="url(friday.jpeg)"
                           
                            break;
                            case 6:
                                day="SATURDAY"
                                document.body.style.backgroundImage="url(saturday.jpg)"
                               
                                break;
}
document.getElementById("Day").innerHTML=day;
document.getElementById("Sec").innerHTML=ss;
var updateTheTime=setTimeout(clock,1000)
}

function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning "
        document.getElementById("bgVid").src="morning.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
    }
    else if(hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgVid").src="afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
 }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgVid").src="evening.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
 
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("bgVid").style.color="white"
        document.getElementById("bgVid").src="night.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
      }
}
greet()

function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000)