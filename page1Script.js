//-------------------- On click of Resources button -----------------

document.onclick = (e) => {
  if (e.target.id !== "resource") hideMenu();
};

document.getElementById("resource").onclick = onResourceClick;

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function onResourceClick(e) {
  console.log("inside right click");
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display === "block")
    hideMenu();
  else {
    const rect = e.target.getBoundingClientRect();

    let menu = document.getElementById("contextMenu");
    console.log("line17", document.getElementById("contextMenu"));

    menu.style.left = `${rect.x}px`;
    menu.style.top = `${rect.y + 35}px`;

    menu.style.display = "block";
    // menu.style.left = `${e.pageX - 10}px`;
    // menu.style.top = `${e.pageY + 20}px`;
  }
}

//----------------------populating a dynamic table from array of object named jsData------------------------

let jsData = new Array();
jsData[0] = {
  dishName: "Dal Makhni",
  amount: "1 Portion",
  time: "3 min",
  stage: "Cook Fryer 2",
  state: "DELAYED",
  action: ":",
};
jsData[1] = {
  dishName: "Dal Makhni",
  amount: "1 Portion",
  time: "2 min",
  stage: "Cook Fryer 2",
  state: "ON TRACK",
  action: ":",
};
jsData[2] = {
  dishName: "Dal Makhni",
  amount: "1 Portion",
  time: "3 min",
  stage: "Cook Fryer 2",
  state: "FLAGGED",
  action: ":",
};
jsData[3] = {
  dishName: "Paneer do pyaza",
  amount: "1 Portion",
  time: "3 min",
  stage: "Cook Fryer 2",
  state: "DELAYED",
  action: ":",
};
jsData[4] = {
  dishName: "Noodles",
  amount: "1 Portion",
  time: "5 min",
  stage: "Cook Fryer 2",
  state: "DELAYED",
  action: ":",
};

function drawTable(tbody) {
  let tr, td;
  tbody = document.getElementById(tbody);
  // loop through data source
  for (let i = 0; i < jsData.length; i++) {
    tr = tbody.insertRow(tbody.rows.length); //inserting rows according to the no of objects one by one
    //console.log("row length-",tbody.rows.length);

    console.log("row is---", tr);

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = jsData[i].dishName;
    console.log("cell length 1--", tr.cells.length, td.innerHTML);

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = jsData[i].amount;
    console.log("cell length 2--", tr.cells.length, td.innerHTML);

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = jsData[i].time;
    console.log("cell length 3--", tr.cells.length, td.innerHTML);

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = jsData[i].stage;
    console.log("cell length 4--", tr.cells.length, td.innerHTML);

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = `<span class="state ${jsData[i].state
      .toLowerCase()
      .replace(" ", "-")}-border">${jsData[i].state}</span>`;

    console.log("cell length 5--", tr.cells.length, td.innerHTML);
    console.log("td of state--", td);
    if (jsData[i].state == "DELAYED") {
      tr.setAttribute("style", "background-color:#ffedcc;");
      td.setAttribute("style", "color:#cc8400;");
    } else if (jsData[i].state == "FLAGGED") {
      tr.setAttribute("style", "background-color:#ffe6e6;");
      td.setAttribute("style", "color:red;");
    } else if (jsData[i].state == "ON TRACK") {
      tr.setAttribute("style", "background-color:#e8f4e8;");
      td.setAttribute("style", "color:#319831;");
    }

    td = tr.insertCell(tr.cells.length);
    td.innerHTML = jsData[i].action;
    console.log("cell length 6--", tr.cells.length, td.innerHTML);
  }
}

drawTable("matchData");
