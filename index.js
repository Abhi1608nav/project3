var colors=generateRandomColor(6);
var Square=document.querySelectorAll(".squares");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var displayMessage=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetColors=document.querySelector("#reset");
var easyBtn=document.querySelector("#EasyBtn");
var hardBtn=document.querySelector("#HardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors=generateRandomColor(3);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<Square.length;i++)
    {
        if(colors[i])
        {
            Square[i].style.backgroundColor=colors[i];
        }
        else
        {
          Square[i].style.display="none"
        }
    }
})
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors=generateRandomColor(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<Square.length;i++)
    {
        if(colors[i])
        {
            Square[i].style.backgroundColor=colors[i];
            Square[i].style.display="block" 
        }
    }
})


resetColors.addEventListener("click",function(){
    colors=generateRandomColor(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    this.textContent="New Color";
    displayMessage.textContent="";
    for(var i=0;i<Square.length;i++)
    {
        Square[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<Square.length;i++)
{  // adding initial color to squares
    Square[i].style.backgroundColor=colors[i];
    // adding click listeners to square
    Square[i].addEventListener("click",function(){
        //grab a color
        var clickedcolor=this.style.backgroundColor;
        //comparing color
        if(clickedcolor===pickedColor)
        {
            
            displayMessage.textContent="Correct";
            changecolor(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
            resetColors.textContent="Play Again"
            
        }
        else{
            this.style.backgroundColor="#232323";
            displayMessage.textContent="Try Again";
        }
    })
}

function changecolor(color){
    //loop for changing color
    for(var i=0;i<Square.length;i++)
    {
        Square[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length)
    return colors[random];
}

function generateRandomColor(num)
{
    //make an array
    var arr=[];
    //repeat num times
    for(var i=0;i<num;i++)
    {
      arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor()
{
    //pick red "0-255"
    var r=Math.floor(Math.random()*256)
    //pick green"0-255"
    var g=Math.floor(Math.random()*256)
    //pick blue "0-255"
    var b=Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}