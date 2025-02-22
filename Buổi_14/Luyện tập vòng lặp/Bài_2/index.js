function tinhfor(){
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    for(let i=0;i<1000;i++){
        if(i%3===0){
            console.log(i);
            sum+=1;
        }
    }
    console.log(sum);
    ketqua.textContent=sum;
}
function tinhwhile(){
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    let i=0;
    while(i<1000){
        if(i%3===0){
            console.log(i);
            sum+=1;
        }
        i++;
    }
    console.log(sum);
    ketqua.textContent=sum;
}

function tinhdowhile(){
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    let i=0;
    do{
        if(i%3===0){
            console.log(i);
            sum+=1;
        }
        i++;
    }
    while(i<1000);
    console.log(sum);
    ketqua.textContent=sum;
}




