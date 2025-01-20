let khuVuc = 0;
let doiTuong=0;
function tinhDiem(){
    // debugger;
    let diemChuan = Number(document.getElementById("diemchuan").value); 
    let diemMon1 = Number(document.getElementById("diemmon1").value); 
    let diemMon2 = Number(document.getElementById("diemmon2").value); 
    let diemMon3 = Number(document.getElementById("diemmon3").value); 
    let ketQua= document.getElementById("ketqua");
    let diemTong= document.getElementById("diemtong");
    let diemTB = (diemMon1+ diemMon2 + diemMon3);
    let diem =diemTB +Number(khuVuc) + Number(doiTuong);
    if(diemMon1===0 || diemMon2===0 || diemMon3===0){
        ketQua.textContent="Bạn đã rớt. Vì có môn bị điểm liệt"
    }
    else if (diem >= diemChuan){
        ketQua.textContent="Chúc mừng bạn đã đậu."
        diemTong.textContent=diem;
    }
    else{
        ketQua.textContent="Bạn đã rớt."
        diemTong.textContent=diem;
    }

}
function chonKhuVuc(){
    let click = document.getElementById("khuvuc"); 
    let chonKhuVuc = click.value;
    if (chonKhuVuc==="A"){
        khuVuc="2";
    }
    else if(chonKhuVuc==="B"){
        khuVuc="1";
    }
    else if(chonKhuVuc==="C"){
        khuVuc="0.5";
    }
    else{
        khuVuc="0";
    }
}
function chonDoiTuong(){
    let click = document.getElementById("doituong"); 
    let chonDoiTuong = click.value;
    if (chonDoiTuong==="1"){
        doiTuong="2.5";
    }
    else if(chonDoiTuong==="2"){
        doiTuong="1.5";
    }
    else if(chonDoiTuong==="3"){
        doiTuong="1";
    }
    else{
        doiTuong="0";
    }
}
