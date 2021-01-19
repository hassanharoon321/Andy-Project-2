function addExpense() {
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var amount = document.getElementById("amount");
    var yet = document.getElementById("yet");

    if (yet.style.display === "block") {
        yet.style.display = "block";
    } else {
        yet.style.display = "none";
    }

    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    table.appendChild(tr);

    var tdEik = document.createElement("td");
    var tdOne = document.createTextNode(name.value);
    tdEik.appendChild(tdOne)

    var tdDoo = document.createElement("td");
    var tdTwo = document.createTextNode(date.value);
    tdDoo.appendChild(tdTwo)

    var tdTeen = document.createElement("td");
    var tdThree = document.createTextNode("₹ " + amount.value);
    tdTeen.appendChild(tdThree)

    var tdChaar = document.createElement("td");

    var devareBtn = document.createElement("button");
    var textBtn = document.createTextNode("Delete");
    devareBtn.appendChild(textBtn);
    devareBtn.setAttribute("class", "btn btn-danger hello")
    devareBtn.setAttribute("onclick", "deleteBtn(this)")

    tdChaar.appendChild(devareBtn);

    var tdPaach = document.createElement("td");

    var editBtn = document.createElement("button");
    var btnTextEdit = document.createTextNode("Edit");
    editBtn.appendChild(btnTextEdit);
    editBtn.setAttribute("class", "btn btn-success left-btn")
    editBtn.setAttribute("onclick", "editBtn(this)")


    tdPaach.appendChild(editBtn)

    tr.appendChild(tdEik)
    tr.appendChild(tdDoo)
    tr.appendChild(tdTeen)
    tr.appendChild(tdChaar)
    tr.appendChild(tdPaach);

    name.value = "";
    amount.value = "";
    date.value = "";

}

function deleteBtn(e) {
    e.parentNode.parentNode.remove()
}

function editBtn(e) {
    var user = prompt("Enter new Value", e.parentNode.parentNode.firstChild.innerHTML);
    e.parentNode.parentNode.firstChild.innerHTML = user;
    // console.log(e.parentNode.parentNode.firstChild.innerHTML);
}