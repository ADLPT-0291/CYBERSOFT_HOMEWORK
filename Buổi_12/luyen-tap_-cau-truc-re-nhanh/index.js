//------------------------------------------
// Bài tập 1
function kiemTraSoDuongAm(){
    let so = document.getElementById("number1");
    let giatri= Number(so.value);
    if(giatri>0)
    {
        let pEle = document.getElementById("kq1");
        pEle.textContent="Số dương";
    }
    else
    {
        let pEle = document.getElementById("kq1");
        pEle.textContent="Số âm";  
    }
}
//------------------------------------------
// Bài tập 2
function kiemTraTuoi(){
    let so = document.getElementById("number2");
    let tuoi= Number(so.value);
    if(tuoi>=6)
    {
        let pEle = document.getElementById("kq2");
        pEle.textContent="Đủ tuổi vào lớp 1";
    }
    else
    {
        let pEle = document.getElementById("kq2");
        pEle.textContent="Chưa đủ tuổi vào lớp 1";  
    }
}
//------------------------------------------
// Bài tập 3
function kiemTraTuoiLaiXe(){
    let so = document.getElementById("number3");
    let tuoi= Number(so.value);
    if(tuoi>=16)
    {
        let pEle = document.getElementById("kq3");
        pEle.textContent="Bạn đã đủ tuổi lái xe";
    }
    else
    {
        let pEle = document.getElementById("kq3");
        pEle.textContent="Bạn chưa đủ tuổi lái xe";  
    }
}
//------------------------------------------
// Bài tập 4
function kiemTraXetThuong(){
    let so = document.getElementById("number4");
    let soluong= Number(so.value);
    let doanhSo= soluong *1000;
    let pEle1 = document.getElementById("kq4");
    let pEle2 = document.getElementById("kqthuong");
    if(soluong>=100)
    {
        pEle1.textContent=doanhSo + " vnđ";
        pEle2.textContent=doanhSo + doanhSo*0.1 + " vnđ";
    }
    else
    {
        pEle1.textContent=doanhSo + " vnđ";
        pEle2.textContent=doanhSo + " vnđ"; 
    }
}

//------------------------------------------
// Bài tập 6
function tinhChiecKhau(){
    let so = document.getElementById("number6");
    let tien= Number(so.value);
    let pEle1 = document.getElementById("kq6");
    let pEle2 = document.getElementById("kqchieckhau");
    if(tien>=500)
    {
        pEle1.textContent=tien + "$";
        tien= tien - tien*0.2;
        pEle2.textContent=tien + "$";
    }
    else
    {
        pEle1.textContent=tien + "$";
        pEle2.textContent="Bạn hãy chọn thêm vài món để được khuyến mãi!"; 
    }
}

//------------------------------------------
// Bài tập 7
function kiemTraMua(){
    let so = document.getElementById("number7");
    let thang= Number(so.value);
    let pEle1 = document.getElementById("kq7");
    if (thang<1 || thang >12)
    {
        pEle1.textContent="Bạn đã nhập sai xin mời nhập lại";
    }
    switch (thang){
        case 1:
        case 2:
        case 3:
            pEle1.textContent="Mùa Xuân";
            break;
        case 4:
        case 5:
        case 6:
            pEle1.textContent="Mùa Hạ";
            break;
        case 7:
        case 8:
        case 9:
            pEle1.textContent="Mùa Thu";
            break;
        case 10:
        case 11:
        case 12:
            pEle1.textContent="Mùa Đông";
    }
}

//------------------------------------------
// Bài tập 8
function chonCheDoLai(){
    let valuedn= document.getElementById("list");
    let chedo = valuedn.value;
    let pEle1 = document.getElementById("kq8");
    if (chedo==="1"){
        pEle1.textContent="normal";
    }
    else if(chedo==="2"){
        pEle1.textContent="eco";
    }
    else if(chedo==="3"){
        pEle1.textContent="sport";
    }
    else{
        pEle1.textContent="Hãy chọn chế độ lái";
    }
}
