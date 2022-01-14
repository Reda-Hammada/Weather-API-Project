var _work = new work();

document.getElementById('formSubmit').addEventListener("submit", function(event){
    event.preventDefault();
   
})


function readWork() {

    var work = new Worker();
    work.title = document.getElementById("inputTitle").value;
    return work;
}

function resetForm() {

    document.getElementById("inputTitle").value = "";
    
}
