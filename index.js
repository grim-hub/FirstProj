//This here is the variables for the to-do list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//this here is the variables for the theme-switch button
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");


function addTask(){ //WHen we dont put anything an alert will show up 
    if(inputBox.value === ''){
        alert("You must Write Something!");
    }    
    else{ //When we input something in the textbox this code will run
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //this will clear the value of the textbox 
    saveData();    //this will run a function
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){ //this function saves data in local storage
    localStorage.setItem("data", listContainer.innerHTML); 
}
function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

/*
    This is for the Theme Changer
*/

const enableDarkmode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode= () =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

//This will change the theme on clicking

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode(): disableDarkmode()
});
