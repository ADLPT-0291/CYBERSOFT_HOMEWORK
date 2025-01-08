function quyDoiTien(){
    let inputEle1 = document.getElementById('usd');
    let tiendo = Number(inputEle1.value);
    let quydoi = tiendo*23.500;
    let text = quydoi.toLocaleString("en-US", {style:"currency", currency:"USD"});
    let btnEle = document.getElementById('ketqua');
    btnEle.textContent=text;
}