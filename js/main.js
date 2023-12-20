var siteNameInput = document.getElementById("sName");
var siteUrlInput = document.getElementById("sUrl");
var submit = document.getElementById("submit");

var allSites = [];

if (localStorage.getItem("allSites") != null) {

    allSites = JSON.parse(localStorage.getItem("allSites"));
    displayAllSites();
}

function addSites() {
    var site = {
        index: 0,
        name: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }
if(submit.innerHTML =="ADD"){
     allSites.push(site);
    localStorage.setItem("allSites", JSON.stringify(allSites));
}else{
    update();
}
   
    clearInputs();
    displayAllSites();

}
function clearInputs() {
    siteNameInput.value = '';
    siteUrlInput.value = "";
}
function displayAllSites() {
    var cartona = "";
    for (var i = 0; i < allSites.length; i++) {

        cartona += `
        <tr>
        <td>${i + 1}</td>
        <td>${allSites[i].name}</td>
        <td><a href="${allSites[i].siteUrl}"target="_blank"><button class="btn btn-success"><span><i class="fa-solid fa-eye pe-1" style="color: #ffffff;"></i></span> Visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleteSite(${i});"> <span><i  class="fa-solid fa-trash-can pe-1" style="color: #ffffff;"></i></span>Delete</button> </td>
        <td><button class="btn btn-secondary" onclick=" update(${i})"> <span><i class="fa-solid fa-pen pe-1" style="color: #ffffff;"></i></span>Update</button></td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = cartona;

}

function deleteSite(index) {

    allSites.splice(index, 1);
    localStorage.setItem("allSites", JSON.stringify(allSites));
    displayAllSites();
}
function update(index) {
    submit.innerHTML = "Update"
    siteNameInput.value = allSites[index].name;
    siteUrlInput.value = allSites[index].siteUrl;
    submit.onclick = function () {
        var updatedSite = {
            name: siteNameInput.value,
            siteUrl: siteUrlInput.value
        }
        allSites[index].name = allSites[index].name
        allSites[index].siteUrl = allSites[index].siteUrl
        allSites.splice(index, 1, updatedSite)
        localStorage.setItem("allSites", JSON.stringify(allSites));
        clearInputs();
        submit.innerHTML = "ADD"
        submit.onclick = addSites;
        displayAllSites();
    }

}





