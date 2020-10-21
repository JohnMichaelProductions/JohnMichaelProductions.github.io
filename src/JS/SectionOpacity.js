document.getElementById("sectionI").style.opacity = 0;
var elem = document.getElementById("sectionI");
var x = 0;
var textAnim = setInterval(function()
{
    if(elem.style.opacity < 1)
    {
        elem.style.opacity = x + .01;
        x += .01;
        console.log(elem.style.opacity);
    }
    else
        clearInterval(textAnim);
}, 20);