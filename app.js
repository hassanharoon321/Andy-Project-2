function addExpense() {
    let name = document.getElementById("name");
    let date = document.getElementById("date");
    let amount = document.getElementById("amount");
    let yet = document.getElementById("yet");

    if (yet.style.display === "block") {
        yet.style.display = "block";
    } else {
        yet.style.display = "none";
    }

    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let tdEik = document.createElement("td");
    let tdOne = document.createTextNode(name.value);
    tdEik.appendChild(tdOne)

    let tdDoo = document.createElement("td");
    let tdTwo = document.createTextNode(date.value);
    tdDoo.appendChild(tdTwo)

    let tdTeen = document.createElement("td");
    let tdThree = document.createTextNode("₹ " + amount.value);
    tdTeen.appendChild(tdThree)

    tr.appendChild(tdEik)
    tr.appendChild(tdDoo)
    tr.appendChild(tdTeen)

    name.value = "";
    amount.value = "";
    date.value = "";
    
}