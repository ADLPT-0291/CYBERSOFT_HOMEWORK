
// tongThuNhap=Number(tongThuNhap);
let thuNhapChiuThue= 0;
let thue=0;
function tinhTienThue(thuNhapChiuThue){

    if(thuNhapChiuThue<0){
        return "Số km không hợp lệ";
    }
    else if(thuNhapChiuThue==0){
        return 0;
    }
    else if(thuNhapChiuThue>0 && thuNhapChiuThue<=6e+7){
        thue=0.05;
    }
    else if(thuNhapChiuThue>6e+7 && thuNhapChiuThue<=12e+7){
        thue=0.1;
    }
    else if(thuNhapChiuThue>12e+7 && thuNhapChiuThue<=21e+7){
        thue=0.15;
    }
    else if(thuNhapChiuThue>21e+7 && thuNhapChiuThue<=384e+6){
        thue=0.2;
    }
    else if(thuNhapChiuThue>384e+7 && thuNhapChiuThue<=624e+7){
        thue=0.25;
    }
    else if(thuNhapChiuThue>624e+7 && thuNhapChiuThue<=960e+7){
        thue=0.3;
    }
    else{
        thue=0.35;
    }
    return thue;
}
function main(){
    let ten = document.getElementById("ten").value;
    let ho_Ten = document.getElementById("hoTen");
    let PhuThuoc= document.getElementById("nguoiPhuThuoc").value;
    let tongThuNhap = document.getElementById("thuNhap").value;
    thuNhapChiuThue= tongThuNhap - 4000000 - PhuThuoc*1600000;
    console.log(thuNhapChiuThue);
    tinhTienThue(thuNhapChiuThue);
    let tongTienThue =thuNhapChiuThue*thue;
    tienThue.textContent = tongTienThue.toLocaleString() + " VND";
    ho_Ten.textContent=ten+ ";";
}