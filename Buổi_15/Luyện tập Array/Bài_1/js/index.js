let array = [];
let strHTML = '';
function dauMang(){
    let input= document.getElementById('number');
    let kq = document.getElementById('ketqua');
    let giatri = input.value;
    array.unshift(giatri);
    console.log(array);
    strHTML=`[${array}]`;
    kq.innerHTML = strHTML;
}

function cuoiMang(){
    let input= document.getElementById('number');
    let kq = document.getElementById('ketqua');
    let giatri = input.value;
    array.push(giatri);
    console.log(array);
    strHTML=`[${array}]`;
    kq.innerHTML = strHTML;
}
function batKy(){
    let input= document.getElementById('number').value;
    let vitri = document.getElementById('vitri').value;
    let kq = document.getElementById('ketqua');
    if(vitri==="")
    {
        alert("Vui lòng nhập vị trí cần thêm");
        return;
    }
    else{
        array.splice(vitri-1,0,input);
        console.log(array);
        strHTML=`[${array}]`;
        kq.innerHTML = strHTML;
    }
}