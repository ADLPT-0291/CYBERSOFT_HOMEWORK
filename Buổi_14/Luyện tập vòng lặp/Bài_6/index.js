function tinhfor(){
    let ketqua = document.getElementById('ketqua');
    let n='',a='';
    let space=0;
    let strHTML = "<pre style='font-family: monospace;'>";
    for (let i=5; i>=1; i--){
        if(!(i%2===0)){
            space=(i-1)/2;
            for (let j=0; j<space; j++){
                strHTML+=" ";
            }
            for (let j=i; j<=5; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
    }
    for (let i=1; i<=3; i++){
        if(!(i%2===0)){
            space=(i-1)/2;
            for (let j=space; j>=0; j--){
                strHTML+=" ";
            }
            for (let j=i; j<=3; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
    }
    ketqua.innerHTML = strHTML;
}

//--------------------------------------------------------------
function tinhwhile(){
    let ketqua = document.getElementById('ketqua');
    let n='',a='';
    let i=5, y=1,space=0;
    let strHTML = "<pre style='font-family: monospace;'>";
    while (i>=1){
        if(!(i%2===0)){
            space=(i-1)/2;
            for (let j=0; j<space; j++){
                strHTML+=" ";
            }
            for (let j=i; j<=5; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
        i--;
    }
    while (y<=3){
        if(!(y%2===0)){
            space=(y-1)/2;
            for (let j=space; j>=0; j--){
                strHTML+=" ";
            }
            for (let j=y; j<=3; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
        y++;
    }
    ketqua.innerHTML = strHTML;
}

//--------------------------------------------------------------

function tinhdowhile(){
    let ketqua = document.getElementById('ketqua');
    let n='',a='';
    let i=5, y=1,space=0;
    let strHTML = "<pre style='font-family: monospace;'>";
    do{
        if(!(i%2===0)){
            space=(i-1)/2;
            for (let j=0; j<space; j++){
                strHTML+=" ";
            }
            for (let j=i; j<=5; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
        i--;
    }
    while (i>=1);
    do{
        if(!(y%2===0)){
            space=(y-1)/2;
            for (let j=space; j>=0; j--){
                strHTML+=" ";
            }
            for (let j=y; j<=3; j++){
                strHTML+='*';
            }
            strHTML += "\n";
            n='';a='';
        }
        y++;
    }
    while (y<=3);
    ketqua.innerHTML = strHTML;
}