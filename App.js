function myFunction () {
    console.log("Clicked!");
    {alert("Clicked")};
}

document.getElementById("button").addEventListener("click",myFunction)   

