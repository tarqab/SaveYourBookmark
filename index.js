var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var ArrayOfElements = []

if (localStorage.getItem("elements")) {
    ArrayOfElements = JSON.parse(localStorage.getItem("elements"))
    displayElements(ArrayOfElements);
}



function addElements() {
    var siteInfo = {
        siteName: siteName.value,
        siteUrl: siteUrl.value
    }
    console.log(siteInfo);
    ArrayOfElements.push(siteInfo);
    displayElements(ArrayOfElements);
    localStorage.setItem('elements', JSON.stringify(ArrayOfElements));
    clear();
}

function displayElements(list) {
    var data = ``;
    for (var i = 0; i < list.length; i++) {
        data += `
    <tr>
    <td>${i + 1}</td>
    <td>${list[i].siteName}</td>
    <td><button class="btn btn-success" onclick="visitWebsite(${i})"><span class="me-2"><i class="fa-solid fa-circle-chevron-right"></i></span>Visit</button></td>
    <td><button class="btn btn-danger" onclick=" deleteBookmark(${i})"><span class="me-2"><i class="fa-solid fa-trash"></i></span>Delete</button></td>
    </tr>
    `
    }
    document.getElementById("elementsTable").innerHTML = data
}

function clear() {
    siteName.value = " "
    siteUrl.value = " "
}

function visitWebsite(index) {
    window.open(ArrayOfElements[index].siteUrl)
}

function deleteBookmark(index) {
    ArrayOfElements.splice(index, 1)
    localStorage.setItem('elements', JSON.stringify(ArrayOfElements));
    displayElements(ArrayOfElements);

}