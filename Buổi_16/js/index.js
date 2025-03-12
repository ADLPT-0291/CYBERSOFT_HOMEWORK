let array = [];
let strHTML = '';
let div1= document.getElementById("hienthi1");
let title1= document.getElementById("title1");
let icon1 = document.getElementById("icon1");
let div2= document.getElementById("hienthi2");
let title2= document.getElementById("title2");
let icon2 = document.getElementById("icon2");
let div3= document.getElementById("hienthi3");
let title3= document.getElementById("title3");
let icon3 = document.getElementById("icon3");
let div4= document.getElementById("hienthi4");
let title4= document.getElementById("title4");
let icon4 = document.getElementById("icon4");
let div5= document.getElementById("hienthi5");
let title5= document.getElementById("title5");
let icon5 = document.getElementById("icon5");
let div6= document.getElementById("hienthi6");
let title6= document.getElementById("title6");
let icon6 = document.getElementById("icon6");
let div7= document.getElementById("hienthi7");
let title7= document.getElementById("title7");
let icon7 = document.getElementById("icon7");
let div8= document.getElementById("hienthi8");
let title8= document.getElementById("title8");
let icon8 = document.getElementById("icon8");
let div9_1= document.getElementById("hienthi9_1");
let title9= document.getElementById("title9");
let icon9 = document.getElementById("icon9");
let div9_2= document.getElementById("hienthi9_2");
let div10= document.getElementById("hienthi10");
let title10= document.getElementById("title10");
let icon10 = document.getElementById("icon10");


function themSo(){
    let input= document.getElementById('number');
    let kq = document.getElementById('ketqua');
    let giatri = Number(input.value);
    array.push(giatri);
    console.log(array);
    strHTML=`${array}`;
    kq.innerHTML = strHTML;
}
//-------------------------
// Tính Tổng Số Dương
function tongSoDuong(){
    let kq1 = document.getElementById('ketqua1');
    let tong = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>0){
            tong+=Number(array[i]);
        }
    }
    kq1.textContent=`${tong}`;
}

function hienThi1(){

    // Đổi icon
    if (icon1.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-down", "fa-angle-up");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div1.style.display === "none" || div1.style.display === "") {
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="#E7F1FF";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div1.style.display = "none";
        title1.style.backgroundColor ="white";
    }
}

//-------------------------
// Đếm Số Dương
function demSoDuong(){
    let kq2 = document.getElementById('ketqua2');
    let soDuong = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>0){
            soDuong+=1;
        }
    }
    kq2.textContent=`${soDuong}`;
}


function hienThi2(){
    debugger;
    // Đổi icon
    if (icon2.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-down", "fa-angle-up");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div2.style.display === "none" || div2.style.display === "") {
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";

        title1.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
        title2.style.backgroundColor ="#E7F1FF";
    } else {
        div2.style.display = "none";
        title2.style.backgroundColor ="white";
    }
}

//-------------------------
// Tìm Số Nhỏ Nhất

function timSoNhoNhat() {
    let kq3 = document.getElementById('ketqua3');
    for(let i=0; i< array.length;i++){
        let mang=i;
        for(let j = i+1; j< array.length; j++)
        {
            if (array[j]<array[mang]){
                mang=j;
            }
        }
        let giatri=array[i];
        array[i] = array[mang];
        array[mang] =giatri;
    }
    console.log(array);
    kq3.textContent=`${array[0]}`;
}


function hienThi3(){

    // Đổi icon
    if (icon3.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-down", "fa-angle-up");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div3.style.display === "none" || div3.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "block";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="#E7F1FF";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div3.style.display = "none";
        title3.style.backgroundColor ="white";
    }
}



// Tìm Số Dương Nhỏ Nhất

function timSoDuongNhoNhat() {
    let kq4 = document.getElementById('ketqua4');
    for(let i=0; i< array.length;i++){
        let mang=i;
        for(let j = i+1; j< array.length; j++)
        {
            if (array[j]<array[mang]){
                mang=j;
            }
        }
        let giatri=array[i];
        array[i] = array[mang];
        array[mang] =giatri;
    }
    for(let k=0; k<array.length;k++){
        if(array[k]>0)
        {
            kq4.textContent=`${array[k]}`;
            break;
        }
    }
}

function hienThi4(){

    // Đổi icon
    if (icon4.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-down", "fa-angle-up");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div4.style.display === "none" || div4.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "block";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="#E7F1FF";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div4.style.display = "none";
        title4.style.backgroundColor ="white";
    }
}


// Tìm Số Chẵn Cuối Cùng

function timSoChanCuoiCung() {
    let kq5 = document.getElementById('ketqua5');
    for(let k=0; k<array.length;k++){
        if(!(array[k]%2))
        {
            console.log(array[k]);
            kq5.textContent=`${array[k]}`;
        }
    }
}

function hienThi5(){

    // Đổi icon
    if (icon5.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-down", "fa-angle-up");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div5.style.display === "none" || div5.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "block";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="#E7F1FF";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div5.style.display = "none";
        title5.style.backgroundColor ="white";
    }
}



// Đổi chỗ
function doiCho() {
    let kq6 = document.getElementById('ketqua6');
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    // Kiểm tra xem index có hợp lệ không
    if (number1 >= 0 && number1 < array.length && number2 >= 0 && number2 < array.length) {
        let giatri1 = array[number1];
        array[number1] = array[number2]; 
        array[number2] = giatri1;

        console.log(array);
        kq6.textContent = `${array}`;
    } else {
        alert("Vị trí nhập không hợp lệ!");
    }
}

function hienThi6(){

    // Đổi icon
    if (icon6.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-down", "fa-angle-up");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div6.style.display === "none" || div6.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "block";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="#E7F1FF";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div6.style.display = "none";
        title6.style.backgroundColor ="white";
    }
}


// Sắp xếp tăng dần
function sapXepTangDan() {
    let kq7 = document.getElementById('ketqua7');
    for(let i=0; i< array.length;i++){
        let mang=i;
        for(let j = i+1; j< array.length; j++)
        {
            if (array[j]<array[mang]){
                mang=j;
            }
        }
        let giatri=array[i];
        array[i] = array[mang];
        array[mang] =giatri;
    }
    console.log(array);
    kq7.textContent=`${array}`;
}

function hienThi7(){

    // Đổi icon
    if (icon7.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-down", "fa-angle-up");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div7.style.display === "none" || div7.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "block";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="#E7F1FF";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div7.style.display = "none";
        title7.style.backgroundColor ="white";
    }
}

// Tìm số nguyên tố đầu tiên

function timSoNguyenToDauTien() {
    let kq8 = document.getElementById('ketqua8');
    for(let k=0; k<array.length;k++){
        if(!(array[k]%1) && !(array[k]%array[k]) && (array[k]>1))
        {
            kq8.textContent=`${array[k]}`;
            break;
        }
    }
}

function hienThi8(){

    // Đổi icon
    if (icon8.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-down", "fa-angle-up");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div8.style.display === "none" || div8.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "block";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="#E7F1FF";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="white";
    } else {
        div8.style.display = "none";
        title8.style.backgroundColor ="white";
    }
}


// Đếm số Nguyên
let array9=[];
function themSo9(){
    let input= document.getElementById('number9');
    let kq9_1 = document.getElementById('ketqua9_1');
    let giatri = Number(input.value);
    array9.push(giatri);
    console.log(array9);
    strHTML=`${array9}`;
    kq9_1.innerHTML = strHTML;
}

function demSoNguyen(){
    let kq9_2 = document.getElementById('ketqua9_2');
    let soNguyen=0;
    for(let k=0; k<array9.length;k++){
        let giatri=Number.isInteger(array9[k]);
        if(giatri===true)
        {
            soNguyen++;
        }
    }
    kq9_2.textContent=`${soNguyen}`;
}

function hienThi9(){

    // Đổi icon
    if (icon9.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-down", "fa-angle-up");
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div9_1.style.display === "none" || div9_1.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "block";
        div9_2.style.display = "block";
        div10.style.display = "none";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="#E7F1FF";
        title10.style.backgroundColor ="white";
    } else {
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        title9.style.backgroundColor ="white";
    }
}

// So Sánh Số Lượng Số Âm Và Số Dương

function soSanh() {
    let kq10 = document.getElementById('ketqua10');
    let soDuong=0;
    let soAm=0;
    for(let k=0; k<array.length;k++){
        if(array[k]>0)
        {
            soDuong++;
        }
        else{
            soAm++;
        }
    }
    if(soDuong>soAm){
        kq10.textContent=`Số Dương > Số Âm`;
    }
    else if(soDuong===soAm){
        kq10.textContent=`Số Dương = Số Âm`;
    }
    else{
        kq10.textContent=`Số Dương < Số Âm`;
    }
}

function hienThi10(){
    debugger;
    // Đổi icon
    if (icon10.classList.contains("fa-angle-down")) {
        icon1.classList.replace("fa-angle-up", "fa-angle-down");
        icon2.classList.replace("fa-angle-up", "fa-angle-down");
        icon3.classList.replace("fa-angle-up", "fa-angle-down");
        icon4.classList.replace("fa-angle-up", "fa-angle-down");
        icon5.classList.replace("fa-angle-up", "fa-angle-down");
        icon6.classList.replace("fa-angle-up", "fa-angle-down");
        icon7.classList.replace("fa-angle-up", "fa-angle-down");
        icon8.classList.replace("fa-angle-up", "fa-angle-down");
        icon9.classList.replace("fa-angle-up", "fa-angle-down");
        icon10.classList.replace("fa-angle-down", "fa-angle-up");
    } else {
        icon10.classList.replace("fa-angle-up", "fa-angle-down");
    }
    // Hiển thị
    if (div10.style.display === "none" || div10.style.display === "") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9_1.style.display = "none";
        div9_2.style.display = "none";
        div10.style.display = "block";
        title1.style.backgroundColor ="white";
        title2.style.backgroundColor ="white";
        title3.style.backgroundColor ="white";
        title4.style.backgroundColor ="white";
        title5.style.backgroundColor ="white";
        title6.style.backgroundColor ="white";
        title7.style.backgroundColor ="white";
        title8.style.backgroundColor ="white";
        title9.style.backgroundColor ="white";
        title10.style.backgroundColor ="#E7F1FF";
    } else {
        div10.style.display = "none";
        title10.style.backgroundColor ="white";
    }
}