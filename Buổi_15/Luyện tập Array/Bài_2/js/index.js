let numbers = [58, 31, 98, 82, 57, 22, 43, 73, 28, 96, 91, 68, 12, 39, 7, 87, 21, 61, 67];
let kq = document.getElementById('ketqua');
function lonNhat(){
    let soLon =numbers[0];
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]>soLon){
            soLon=numbers[i];
            kq.textContent=soLon;
        }
    }
}
function nhoNhat(){
    let soNho =numbers[0];
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]<soNho){
            soNho=numbers[i];
            kq.textContent=soNho;
        }
    }
}