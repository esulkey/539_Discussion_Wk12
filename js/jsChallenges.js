document.querySelector("#subscribe").addEventListener("click", function(){
    console.log ("this works")
    
    if(this.checked){
        document.getElementById("emailDiv").style.display="block"
    }
    else{
        document.getElementById("emailDiv").style.display="none"
        console.log('else statement')
    }
})
function getCurrentTime() {
    const now = new Date();
    return now.toString();
}
document.addEventListener("click", function() {
    alert("Current time: " + getCurrentTime());
});