function tinhfor(){
    let ketqua = document.getElementById('ketqua');
    let n=1;
    let x;
    let strHTML = '';
    let giatri=0;
    for(n=1;n<=10;n++){
        for(let i=1;i<=10;i++){
            giatri= n * i;
            console.log(giatri);
            x=i;
            strHTML=`
            <p style="width: 1000px;height: 10px;"> ${n} x ${x} = ${giatri}</p>`;
            ketqua.innerHTML+=strHTML;
        }
    }
}

function tinhwhile(){
    let ketqua = document.getElementById('ketqua');
    let n=1,i=1;
    let x;
    let strHTML = '';
    let giatri=0;
    while(n<=10){
        while(i<=10){
            giatri= n * i;
            console.log(giatri);
            x=i;
            strHTML=`
            <p style="width: 1000px;height: 10px;"> ${n} x ${x} = ${giatri}</p>`;
            ketqua.innerHTML+=strHTML;
            i+=1;
        }
        i=1;
        n+=1;
    }
}


function tinhdowhile(){
    let ketqua = document.getElementById('ketqua');
    let n=1,i=1;
    let x;
    let strHTML = '';
    let giatri=0;
    do{
        do{
            giatri= n * i;
            console.log(giatri);
            x=i;
            strHTML=`
            <p style="width: 1000px;height: 10px;"> ${n} x ${x} = ${giatri}</p>`;
            ketqua.innerHTML+=strHTML;
            i+=1;
        }
        while(i<=10);
        i=1;
        n+=1;
        
    }
    while(n<=10);
}

