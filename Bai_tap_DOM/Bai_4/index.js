function dienTichChuVi(){
    let inputEle1 = document.getElementById('chieudai');
    let inputEle2 = document.getElementById('chieurong');
    let chieudai = Number(inputEle1.value);
    let chieurong = Number(inputEle2.value);
    let dientich = chieudai*chieurong;
    let chuvi= (chieudai+chieurong)*2;
    let btnEle = document.getElementById('ketqua');
    let ketqua = "Diện tích: " + dientich + "; Chu vi: " + chuvi;
    btnEle.textContent=ketqua;
}