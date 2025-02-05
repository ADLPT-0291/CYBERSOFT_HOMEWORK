const so_KW =0;
let soTienPhaiTra=0;
function tinhTienDien(so_KW){
    let giaTien1, giaTien2, giaTien3, giaTien4, giaTien5;

    if(so_KW<0){
        return "Số km không hợp lệ";
    }
    else if(so_KW==0){
        return 0;
    }
    else if(so_KW>0 && so_KW<=50){
        giaTien1=500;
    }
    else if(so_KW>50 && so_KW<=100){
        giaTien1=500;
        giaTien2=650;
    }
    else if(so_KW>100 && so_KW<=200){
        giaTien1=500;
        giaTien2=650;
        giaTien3=850;
    }
    else if(so_KW>200 && so_KW<=350){
        giaTien1=500;
        giaTien2=650;
        giaTien3=850;
        giaTien4=1100;
        giaTien5=0;
    }
    else{
        giaTien1=500;
        giaTien2=650;
        giaTien3=850;
        giaTien4=1100;
        giaTien5=1300;
    }

    if (so_KW<=50){
        soTienPhaiTra=so_KW*giaTien1;
    }
    else if(so_KW>=51 && so_KW<=100){
        soTienPhaiTra= 50 * giaTien1 +(so_KW-50)*giaTien2;
    }
    else if(so_KW>=101 && so_KW<=200){
        soTienPhaiTra= 50 * giaTien1 +50 * giaTien2 + (so_KW-100)*giaTien3;
    }
    else if(so_KW>=201 && so_KW<=350){
        soTienPhaiTra= 50 * giaTien1 + 50 * giaTien2 + 100 * giaTien3 + (so_KW-200)*giaTien4;
    }
    else{
        soTienPhaiTra= 50 * giaTien1 +50 * giaTien2 + 100*giaTien3 + 150*giaTien4 + (so_KW-350)*giaTien5;
    }
    return soTienPhaiTra;
}
function main(){
    let so_KW= Number(document.querySelector("#so_kw").value);
    tinhTienDien(so_KW);
    let ten = document.getElementById("ten").value;
    let tienDien= document.getElementById("tienDien");
    let ho_Ten = document.getElementById("hoTen");
    tienDien.textContent = soTienPhaiTra + " VND";
    ho_Ten.textContent=ten+ ".";
}