// const data_cartridges = django_data_cartridges;

window.onload = function () {
    // const cartCount = document.getElementById('count');
    // const cartData = document.getElementById('data');
    // const select1 = document.getElementById('cartridges_select');

    // console.log(data_supply);

    // console.log(Object.keys(data_cartridges).length);

    // console.log(cartCount, cartData, select1);

    // function setupView() {
    //     const cartridge = data_cartridges[select1.value***REMOVED***;
    //     cartCount.innerText = data_cartridges[select1.value***REMOVED***["count"***REMOVED***;
    //     cartData.innerText = data_cartridges[select1.value***REMOVED***["manufacturer"***REMOVED***;
    // ***REMOVED***

    // setupView();
    //
    // select1.onchange = function () {
    //     setupView()
    // ***REMOVED***;
***REMOVED***;

function btnSupplyChangeOrCancel(id, isCancel) {
    // let supplyLabelCart = document.getElementById("supplyLabelCart" + id);
    // supplyLabelCart.style.display = "none";
    // let supplyInputCart = document.getElementById("supplyInputCart" + id);
    // supplyInputCart.style.display = "block";
    let supplyLabelCount = document.getElementById("supplyLabelCount" + id);
    supplyLabelCount.style.display = "none";
    let supplyInputCount = document.getElementById("supplyInputCount" + id);
    supplyInputCount.style.display = "block";
    let btnSupplyChange = document.getElementById("btnSupplyChange" + id);
    btnSupplyChange.style.display = "none";
    let btnSupplySubmit = document.getElementById("btnSupplySubmit" + id);
    btnSupplySubmit.style.display = "block";
    let btnSupplyCancel = document.getElementById("btnSupplyCancel" + id);
    btnSupplyCancel.style.display = "block";

    if (isCancel) {
        // supplyLabelCart.style.display = "block";
        // supplyInputCart.style.display = "none";
        supplyLabelCount.style.display = "block";
        supplyInputCount.style.display = "none";
        btnSupplyChange.style.display = "block";
        btnSupplySubmit.style.display = "none";
        btnSupplyCancel.style.display = "none";
    ***REMOVED***
***REMOVED***

function btnSupplySubmit(id, cartridge, out) {
    const input = document.getElementById("supplyInputCount" + id).value;
    $.getJSON('http://ps-bykrc.dellin.local/api/supplies/' + id, (data) => {
        // console.log(data["count"***REMOVED***);
        // console.log(input);
        $.ajax({
            type: 'PATCH',
            url: 'http://ps-bykrc.dellin.local/api/supplies/' + id + "/",
            data: {"count": input***REMOVED***
        ***REMOVED***);
    ***REMOVED***);
    console.log(cartridge);
    $.getJSON('http://ps-bykrc.dellin.local/api/cartridges/' + cartridge, (data) => {
        // console.log(data["count"***REMOVED***);
        // console.log(input);
        console.log(out);
        let rawData = data["count"***REMOVED***;
        // if ()
        console.log(rawData);
        $.ajax({
            type: 'PATCH',
            url: 'http://ps-bykrc.dellin.local/api/cartridges/' + cartridge + "/",
            data: {"count": rawData***REMOVED***,
            // success: location.reload()
        ***REMOVED***);
    ***REMOVED***);
    // location.reload();
***REMOVED***

