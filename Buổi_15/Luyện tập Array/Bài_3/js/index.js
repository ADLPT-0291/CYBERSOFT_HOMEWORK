
let numbers = [58, 31, 98, 82, 57, 22, 43, 73, 28, 96, 91, 68, 12, 39, 7, 87, 21, 61, 67];
let kq = document.getElementById('ketqua');
function tinhTong(){
    let sum =0;
    for(let i=0; i< numbers.length;i++){
        sum+=numbers[i];
    }
    console.log(sum);
    kq.textContent=sum;
}
