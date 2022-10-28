
function pushValues(paseData) {

    var storeNameData = localStorage.getItem("userName");
    var storeEmailData = localStorage.getItem("userEmail");
    var storePassData = localStorage.getItem("userPassword");
    var storeCpassData = localStorage.getItem("confirmPassword");
    arr = [storeNameData, storeEmailData, storePassData, storeCpassData];
    console.log(arr);
    paseData(arr)
}
function getValues() {

    var row = table.insertRow();
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
    var cel4 = row.insertCell(3);


    cel1.innerHTML = arr[0];
    cel2.innerHTML = arr[1];
    cel3.innerHTML = arr[2];
    cel4.innerHTML = arr[3];
}
pushValues(getValues);