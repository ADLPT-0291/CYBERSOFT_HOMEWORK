function tinhfor(){
    let solieu = document.getElementById('number').value;
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    if (document.getElementById('number').value === ''){
        alert('Vui lòng nhập số liệu');
        return;
    }
    else if(solieu<0){
        alert('Vui lòng nhập số liệu lớn hơn 0');
        return;
    }
    else{
        for(i=1;i<=solieu;i++){
            if(i%2===0){
                sum+=i;
            }
        }
        console.log(sum);
        ketqua.textContent=sum;
    }
}

function tinhwhile(){
    let solieu = document.getElementById('number').value;
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    let i=0;
    if (document.getElementById('number').value === ''){
        alert('Vui lòng nhập số liệu');
        return;
    }
    else if(solieu<0){
        alert('Vui lòng nhập số liệu lớn hơn 0');
        return;
    }
    else{
        while(i<=solieu){
            if(i%2===0){
                sum+=i;
            }
            i++;
        }
        console.log(sum);
        ketqua.textContent=sum;
    }
}

function tinhdowhile(){
    let solieu = document.getElementById('number').value;
    let ketqua = document.getElementById('ketqua');
    let sum=0;
    let i=0;
    if (document.getElementById('number').value === ''){
        alert('Vui lòng nhập số liệu');
        return;
    }
    else if(solieu<0){
        alert('Vui lòng nhập số liệu lớn hơn 0');
        return;
    }
    else{
        do{
            if(i%2===0){
                sum+=i;
            }
            i++;
        }
        while(i<=solieu);
        console.log(sum);
        ketqua.textContent=sum;
    }
}

