var _work = new workManager();

document.getElementById('formSubmit').addEventListener("submit", function(event){
    event.preventDefault();
    var Work  = readWork();
    insertNewRow();
    resetForm();
   
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
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = workList[i].title;

        var editButton = document.createElement("button");
        editButton.document.createTextNode("edit");
        editButton.setAttribute("onclick", 'onEdit(this)')
        var deleteButton  = document.createElement("button");
        deleteButton.document.createTextNode("Delete");
        deleteButton.setAttribute("onclick", "onDelete(this)");

        cell3 = newRow.insertCell(2);
        cell3.appendChild(editButton)
        cell3.appendChild(deleteButton)




    }

}