document.onclick = (e) => {
  if (e.target.id !== "resource")
    document.getElementById("contextMenu").style.display = "none";
};

document.getElementById("resource").onclick = onResourceClick;

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function onResourceClick(e) {
  console.log("inside right click");
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block")
    hideMenu();
  else {
    const rect = e.target.getBoundingClientRect();

    var menu = document.getElementById("contextMenu");
    console.log("line17", document.getElementById("contextMenu"));

    menu.style.left = `${rect.x}px`;
    menu.style.top = `${rect.y + 35}px`;

    menu.style.display = "block";
    menu.style.left = `${e.pageX - 10}px`;
    menu.style.top = `${e.pageY + 20}px`;
  }
}

//-------------insert data in table dynamically from array of arrays:

let orderData = [
    ["Dal Makhni", "1 Portion", "3 min", "Cook Fryer 2", "ON TRACK", ":"],
    ["Dal Makhni", "1 Portion", "3 min", "Cook Fryer 2", "DELAYED", ":"],
    ["Dal Makhni", "1 Portion", "3 min", "Cook Fryer 2", "FLAGGED", ":"],
    ["Dal Makhni", "1 Portion", "5 min", "Cook Fryer 2", "DELAYED", ":"],
    ["Chiken Tikka", "1 Portion", "10 min", "Cook Fryer 2", "FLAGGED", ":"],
  ],
  table = document.getElementById("table");

for (let i = 0; i < orderData.length; i++) {
  // create a new row
  let newRow = table.insertRow(table.length);
  console.log("newRow---", newRow);
  for (let j = 0; j < orderData[i].length; j++) {
    // create a new cell
    let cell = newRow.insertCell(j);
    //console.log("cell--", cell);

    // add value to the cell
    cell.innerHTML = orderData[i][j];

    if (orderData[i][4] == "DELAYED") {
      console.log("status is-- delayed");
      newRow.style.backgroundColor = "#ffe6e6";
      if (j == 4) {
        //creating button---------------------------
        // let btn = document.createElement("button");
        // btn.innerHTML = orderData[i][4];
        // btn.className = "state-btn";
        // document.body.appendChild(btn);

        // console.log("for button--", btn);

        // cell.innerHTML = btn.innerHTML;

        //------------------------------------------
        cell.className = "stateName";
        console.log("setting class name", cell.className);
        console.log("cell after setting className----", cell);
        // cell.id = "textID";
        // console.log("setting id---", cell);

        cell.style.color = "RED";
        //console.log("for state---", cell.innerHTML);
      }
    }
  }
}
