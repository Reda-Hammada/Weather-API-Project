var _work = new workManager();

document.getElementById('formSubmit').addEventListener("submit", function(event){
    event.preventDefault();
    var work  = readWork();
   
})


function readWork() {

    var work = new work();
    work.title = document.getElementById("inputTitle").value;
    return work;
}

function resetForm() {

    document.getElementById("inputTitle").value = "";
    
}

function insertNewRow(){
    var workList = workManager.workList;
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];

    while(tableBody.rows.length > 0){
        tableBody.deleteRow(0);
    }

    for(var i = 0; i < workList.length; i++){
        var newRow = tableBody.insertRow(table.length);
        newRow.insertCell(0).innerHTML = workList[i].id;
    }

}