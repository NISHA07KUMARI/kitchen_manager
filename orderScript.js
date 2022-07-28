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

//----------------------populating dynamic table ------------------------

let mainData = [
  {
    orderNo: 255,
    jsData: [
      {
        dishName: "Dal Makhni",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 1",
        state: "ON TRACK",
        action: "",
      },
      {
        dishName: "Butter Paneer",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "DELAYED",
        action: "",
      },
      {
        dishName: "Butter Naan",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "FLAGGED",
        action: "",
      },
    ],
  },

  {
    orderNo: 252,
    jsData: [
      {
        dishName: "Paneer Do Pyaza",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "DELAYED",
        action: ":",
      },
      {
        dishName: "Raita",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "FLAGGED",
        action: ":",
      },
    ],
  },

  {
    orderNo: 302,
    jsData: [
      {
        dishName: "Dal Tarka",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 1",
        state: "ON TRACK",
        action: "",
      },
      {
        dishName: "Palak Paneer",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "DELAYED",
        action: "",
      },
      {
        dishName: "Garlic Naan",
        amount: "1 Portion",
        time: "3 min",
        stage: "Cook Fryer 2",
        state: "FLAGGED",
        action: "",
      },
    ],
  },
];

function drawTable(tbody) {
  // loop through data source

  // console.log("main data---", mainData[0].jsData.length);
  // console.log("line 107---", mainData.length);

  for (let i = 0; i < mainData.length; i++) {
    document.getElementById(
      "getOrderNo"
    ).innerHTML = `Order Number # ${mainData[i].orderNo}`;

    let tr, td;
    tbody = document.getElementById(tbody);
    let len = mainData[i].jsData.length;

    console.log("length of js data from loop----", len);
    console.log("order no--", mainData[i].orderNo);

    for (let j = 0; j < len; j++) {
      console.log("jaData length----", mainData[i].jsData[j]);

      //----------------------------------------------------------------------

      tr = tbody.insertRow(tbody.rows.length); //inserting rows according to the no of objects one by one
      console.log("row length-", tbody.rows.length);

      console.log("row is---", tr);

      td = tr.insertCell(tr.cells.length);
      td.innerHTML = mainData[i].jsData[j].dishName;
      console.log("cell length 1--", tr.cells.length, td.innerHTML);

      td = tr.insertCell(tr.cells.length);
      td.innerHTML = mainData[i].jsData[j].amount;
      console.log("cell length 2--", tr.cells.length, td.innerHTML);

      td = tr.insertCell(tr.cells.length);
      td.innerHTML = mainData[i].jsData[j].time;
      console.log("cell length 3--", tr.cells.length, td.innerHTML);

      td = tr.insertCell(tr.cells.length);
      td.innerHTML = mainData[i].jsData[j].stage;
      console.log("cell length 4--", tr.cells.length, td.innerHTML);

      td = tr.insertCell(tr.cells.length);
      td.innerHTML = `<span class="state ${mainData[i].jsData[j].state
        .toLowerCase()
        .replace(" ", "-")}-border">${mainData[i].jsData[j].state}</span>`;

      console.log("cell length 5--", tr.cells.length, td.innerHTML);
      console.log("td of state--", td);
      // if (mainData[i].jsData[j].state == "DELAYED") {
      //   tr.setAttribute("style", "background-color:#ffedcc;");
      //   td.setAttribute("style", "color:#cc8400;");
      // } else if (mainData[i].jsData[j].state == "FLAGGED") {
      //   tr.setAttribute("style", "background-color:#ffe6e6;");
      //   td.setAttribute("style", "color:#cc0000;");
      // } else if (mainData[i].jsData[j].state == "ON TRACK") {
      //   tr.setAttribute("style", "background-color:#e8f4e8;");
      //   td.setAttribute("style", "color:#319831;");
      // }

      switch (mainData[i].jsData[j].state) {
        case "DELAYED":
          tr.setAttribute("style", "background-color:#ffedcc;");
          td.setAttribute("style", "color:#cc8400;");
          break;

        case "FLAGGED":
          tr.setAttribute("style", "background-color:#ffe6e6;");
          td.setAttribute("style", "color:#cc0000;");
          break;

        case "ON TRACK":
          tr.setAttribute("style", "background-color:#e8f4e8;");
          td.setAttribute("style", "color:#319831;");
          break;

        default:
          tr.setAttribute("style", "background-color:#e8f4e8;");
          td.setAttribute("style", "color:black;");
      }

      td = tr.insertCell(tr.cells.length);
      //td.innerHTML = mainData[i].jsData[j].action;
      td.innerHTML = `<span class="action-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></span>`;
      console.log("cell length 6--", tr.cells.length, td.innerHTML);
    }
  }
}

//------------------ Populating dynamic tiles from json payload ---------------------

function drawTiles() {
  const mainSection = document.getElementById("main-section");
  mainData.forEach((order) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerHTML = `<div class="tile">
  <div class="tile-header">
    <div class="order-no">Order Number # ${order.orderNo}</div>
    <div class="tile-action-area">
      <button class="tile-action-button">CLEAR &nbsp;</button>
      <button class="tile-action-button">CANCEL &nbsp;</button>
      <button class="tile-action-button">
        <ion-icon name="chevron-up-sharp"></ion-icon>
      </button>
    </div>
  </div>
  <table class="table">
    <thead>
      <th>
        Name
        <ion-icon name="arrow-down-sharp"></ion-icon>
      </th>
      <th>
        Amount
        <ion-icon name="arrow-down-sharp"></ion-icon>
      </th>
      <th>
        Time
        <ion-icon name="arrow-down-sharp"></ion-icon>
      </th>
      <th>
        Stage
        <ion-icon name="arrow-down-sharp"></ion-icon>
      </th>
      <th>
        State
        <ion-icon name="arrow-down-sharp"></ion-icon>
      </th>
      <th>Action</th>
    </thead>
    <tbody>
      ${order.jsData
        .map(
          (dish) => `
      <tr class="${dish.state.toLowerCase().replace(" ", "-")}-row">
        <td>${dish.dishName}</td>
        <td>${dish.amount}</td>
        <td>${dish.time}</td>
        <td>${dish.stage}</td>
        <td>
        <span class="state ${dish.state
          .toLowerCase()
          .replace(" ", "-")}-border">
        ${dish.state}
        </span>
        </td>
        <td>
        <span class="action-icon"><ion-icon name="ellipsis-vertical-sharp"></ion-icon></span>
        </td>
      </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
</div>
`;
    mainSection.appendChild(tile);
    // concole.log()
  });
}

drawTiles();

// drawTable("matchData");
