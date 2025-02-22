function tinhfor(){
    let ketqua = document.getElementById('ketqua');
    let n=0;
    let giatri=0;
    for(let i=1;i<1000000;i++){
        n+=i;
        if(n>10000){
            console.log(i);
            giatri=i;
            break;
        }
    }
    // console.log(sum);
    ketqua.textContent=giatri;
}
function tinhwhile(){
    let ketqua = document.getElementById('ketqua');
    let n=0;
    let giatri=0;
    let i=1;
    while(i<1000000){
        n+=i;
        if(n>10000){
            console.log(i);
            giatri=i;
            break;
        }
        i++;
    }
    // console.log(sum);
    ketqua.textContent=giatri;
}

function tinhdowhile(){
    let ketqua = document.getElementById('ketqua');
    let n=0;
    let giatri=0;
    let i=1;
    do{
        n+=i;
        if(n>10000){
            console.log(i);
            giatri=i;
            break;
        }
        i++;
    }
    while(i<1000000);
    // console.log(sum);
    ketqua.textContent=giatri;
}



