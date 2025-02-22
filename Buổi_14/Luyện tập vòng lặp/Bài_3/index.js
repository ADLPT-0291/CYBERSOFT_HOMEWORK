function tinhfor(){
    let ketqua = document.getElementById('ketqua');
    let strHTML='';
    let sum=0;
    for(let i=1;i<=10;i++){
        if(i%2===0){
            console.log(i);
            strHTML=`<div style="background-color: red;width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
        else{
            console.log(-i);
            strHTML=`<div style="background-color: blue; width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
    }
}
function tinhwhile(){
    let ketqua = document.getElementById('ketqua');
    let strHTML='';
    let sum=0;
    let i=1;
    while(i<=10){
        if(i%2===0){
            console.log(i);
            strHTML=`<div style="background-color: red;width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
        else{
            console.log(-i);
            strHTML=`<div style="background-color: blue; width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
        i++;
    }
}

function tinhdowhile(){
    let ketqua = document.getElementById('ketqua');
    let strHTML='';
    let sum=0;
    let i=1;
    do{
        if(i%2===0){
            console.log(i);
            strHTML=`<div style="background-color: red;width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
        else{
            console.log(-i);
            strHTML=`<div style="background-color: blue; width: 50px;
    height: 10px;"></div>`;
            ketqua.innerHTML+=strHTML;
        }
        i++;
    }
    while(i<=10);
}


