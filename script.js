function showAlert(message) {
    document.getElementById("alert-message").textContent = message;
    document.getElementById("myAlert").style.display = "block";
}

function hideAlert() {
    document.getElementById("myAlert").style.display = "none";
}

function addnewWE() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('placeholder', "Enter details")
    let weOb = document.getElementById("we");
    let weAddbuttonOb = document.getElementById("weAddbutton");
    weOb.insertBefore(newNode, weAddbuttonOb);
}
function addnewAQ() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('placeholder', "Enter details")
    let aqOb = document.getElementById("aq");
    let aqAddbuttonOb = document.getElementById("aqAddbutton");
    aqOb.insertBefore(newNode, aqAddbuttonOb);
}
function addnewSK() {
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('placeholder', "Enter details")
    let skOb = document.getElementById("sk");
    let skAddbuttonOb = document.getElementById("skAddbutton");
    skOb.insertBefore(newNode, skAddbuttonOb);
}

// function removeWE() {
//     let weOb = document.getElementById("we");
//     let weAddbuttonOb = document.getElementById("weAddbutton");
//     if (weOb.childElementCount > 2) {
//         weOb.removeChild(weOb.lastChild);
//     } else {
//         alert("No more fields to remove")
//     }
// }

function generateCV() {
    let name = document.getElementById("name").value;
    if(name.length == 0) {
        showAlert("Please enter your name");
        // alert("Please enter your name")
        return;
    }
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = name;
    document.getElementById("nameT2").innerHTML = name;
    let dob = document.getElementById("dob").value;
    if(dob.length == 0) {
        showAlert("Please enter your date of birth");
        return;
    }
    let dobT = document.getElementById("dobT")
    dobT.innerHTML = dob;
    let address = document.getElementById("address").value;
    if(address.length == 0) {
        showAlert("Please enter your address")
        return;
    }
    let addressT = document.getElementById("addressT")
    addressT.innerHTML = address;
    let contact = document.getElementById("contact").value;
    if(contact.length == 0) {
        showAlert("Please enter your contact number")
        return;
    }
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = contact;
    let linkedin = document.getElementById("linkedin").value;
    if(linkedin.length == 0) {
        showAlert("Please enter your linkedin profile link")
        return;
    }
    let linkedinT = document.getElementById("linkedinT")
    linkedinT.innerHTML = linkedin;
    let ghb = document.getElementById("ghb").value;
    if(ghb.length == 0) {
        showAlert("Please enter your github profile link")
        return;
    }
    
    let ghbT = document.getElementById("ghbT")
    ghbT.innerHTML = ghb;
    let obj = document.getElementById("obj").value;
    if(obj.length == 0) {
        showAlert("Please enter your objective")
        return;
    }
    // if(obj.length > 100) {
    //     alert("Objective should be less than 100 characters")
    //     return;
    // }

    let objT = document.getElementById("objT")
    objT.innerHTML = obj;

    let wes = document.getElementsByClassName("weField")
    if(wes.length == 0) {
        showAlert("Please enter your work experience")
        return;
    }
    let str = ''
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById("weT").innerHTML = str;
    let aqs = document.getElementsByClassName("aqField")
    for(let i = 0; i < aqs.length; i++) {
        if(aqs[i].value.length == 0) {
            alert("Please enter your academic qualification")
            return;
        }
    }
    let str1 = ''
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById("aqT").innerHTML = str1;
    let sks = document.getElementsByClassName("skField")
    for(let i = 0; i < sks.length; i++) {
        if(sks[i].value.length == 0) {
            showAlert("Please enter your skills")
            return;
        }
    }
    let str2 = ''
    for (let e of sks) {
        str2 = str2 + `<li> ${e.value} </li>`
    }
    document.getElementById("skT").innerHTML = str2;

    let file = document.getElementById("imgField").files[0];
    if(file == undefined) {
        showAlert("Please upload your image")
        return;
    }
    if(file.size > 1000000) {
        showAlert("Image size should be less than 1MB")
        return;
    }
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    };

    document.getElementById("cv-form").style.display = 'none'
    document.getElementById("cv-template").style.display = 'block';
}

function printCV() {
    window.print();
}