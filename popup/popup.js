const STORAGE_KEY = "my-target-key";
console.log("This is a popup!");

document
  .getElementById("add-reminder-button")
  .addEventListener("click", onClickAddReminderButton);

window.onload = (event) => {
  loadDataToHtml();
};

function loadDataToHtml() {
  var allVals = getAllStorage();
  var reminderListEle = document.getElementById("reminder-list");
  removeAllChild(reminderListEle);
  if (reminderListEle != null) {
    allVals.forEach((ele) => {
      var recordEle = document.createElement("li");
      recordEle.appendChild(document.createTextNode(ele));
      reminderListEle.appendChild(recordEle);
    });
  }
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function onClickAddReminderButton() {
  console.log("click on button");
  var val = document.getElementById("new-record").value;
  if (val) {
    addStorage(val);
  }
}

function addStorage(val) {
  appendToStorage(val);
  loadDataToHtml();
}

function getAllStorage() {
  var allVals = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (allVals == null) allVals = [];
  return allVals;
}

function appendToStorage(val) {
  var allVals = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (allVals == null) allVals = [];
  console.log("allVals");
  console.log(allVals);
  allVals.push(val);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allVals));
}
