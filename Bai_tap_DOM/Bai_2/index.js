function tinhTrungBinh(){
    let inputEle1 = document.getElementById('so1');
    let inputEle2 = document.getElementById('so2');
    let inputEle3 = document.getElementById('so3');
    let inputEle4 = document.getElementById('so4');
    let inputEle5 = document.getElementById('so5');
    let so1 = Number(inputEle1.value);
    let so2 = Number(inputEle2.value);
    let so3 = Number(inputEle3.value);
    let so4 = Number(inputEle4.value);
    let so5 = Number(inputEle5.value);
    let Tinh_TB = (so1 + so2 + so3 + so4 + so5)/5;
    let btnEle = document.getElementById('ketqua');
    btnEle.textContent=Tinh_TB;
}