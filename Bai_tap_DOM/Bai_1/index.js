function tinhTienLuong(){
    let inputEle1 = document.getElementById('luong');
    let inputEle2 = document.getElementById('songaylam');
    let luong1ngay = Number(inputEle1.value);
    let songaylam = Number(inputEle2.value);
    let tienluong = luong1ngay * songaylam;
    let btnEle = document.getElementById('ketqua');
    btnEle.textContent=tienluong;
}