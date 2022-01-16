var _work = new workManager();


document.getElementById('formSubmit').addEventListener("submit", function(event){
    event.preventDefault();
    var work = readWork();
    _work.addWork(work);
    insertNewRow();
    resetForm();
   
})


    function readWork() { 
    var work = new Work();
    work.title = document.getElementById("inputTitle").value;
    return work;
}

function resetForm() {

    document.getElementById("inputTitle").value = "";
    
}

function insertNewRow(){
    var workList = _work.workList;
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];

    while(tableBody.rows.length > 0){
        tableBody.deleteRow(0);
    }

    for(var i = 0; i < workList.length; i++){

        var newRow = tableBody.insertRow(tableBody.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = workList[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = workList[i].title;
    }


}