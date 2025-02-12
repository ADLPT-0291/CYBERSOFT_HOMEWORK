function onChange(){
    let x = document.getElementById("soketnoi");
    let luaChon= document.getElementById("list");
    luaChon = luaChon.value;
    if(luaChon == "2"){
        x = x.style.display = "block";
    }
    else{
        x = x.style.display = "none";
    }
}

function tinhTienCap(){
    let soKetNoi = document.getElementById("soketnoi").value;
    let soKenh = document.getElementById("sokenh").value;
    let luaChon= document.getElementById("list");
    let ten = document.getElementById("ten").value;
    let ho_Ten = document.getElementById("hoTen");
    let tienCap = document.getElementById("tienCap");
    luaChon = luaChon.value;
    let phiXuLyHoaDon1 = 0;
    let phiDVCoBan1 = 0;
    let thueKenh1 = 0;
    let phiXuLyHoaDon2 = 0;
    let phiDVCoBan2 = 0;
    let thueKenh2 = 0;
    if (luaChon === "1"){
        phiXuLyHoaDon1 = 4.5;
        phiDVCoBan1 = 20.5;
        thueKenh1 = 7.5;
        tongTien = phiXuLyHoaDon1 + phiDVCoBan1 + soKenh*thueKenh1;
        tongTien = tongTien.toLocaleString("en-US", {style:"currency", currency:"USD"})
        ho_Ten.textContent = ten + ';';
        tienCap.textContent = tongTien;
    }
    else if (luaChon ==="2"){
        phiXuLyHoaDon2 = 15;
        thueKenh2 = 50;
        phiDVCoBan2 = 75;
        if (soKetNoi <= 10){
            tongTien = phiXuLyHoaDon2 + phiDVCoBan2 + soKenh*thueKenh2;
        }
        else if (soKetNoi > 10){
            tongTien = phiXuLyHoaDon2 + phiDVCoBan2 + (soKetNoi-10)*5 + soKenh*thueKenh2;
        }
        tongTien = tongTien.toLocaleString("en-US", {style:"currency", currency:"USD"})
        ho_Ten.textContent = ten + ';';
        tienCap.textContent = tongTien;
    }  
}