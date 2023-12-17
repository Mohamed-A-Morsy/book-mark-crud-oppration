var siteNameInput = document.getElementById("sName");
var siteUrlInput = document.getElementById("sUrl");
var submit = document.getElementById("submit");

var allSites = [];

function addSites() {

    var site = {
        index: 0,
        name: siteNameInput.value,
        siteUrl: siteUrlInput.value,
    }

    allSites.push(site);

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
        <td><button class="btn btn-success"> <span><i class="fa-solid fa-eye pe-1" style="color: #ffffff;"></i></span>Visit</button> </td>
        <td><button class="btn btn-danger"> <span><i class="fa-solid fa-trash-can pe-1" style="color: #ffffff;"></i></span>Delete</button> </td>
      </tr>
      
        `
    }
    document.getElementById("tbody").innerHTML = cartona;


}





