let numbers = [58, 31, 98, 82, 57, 22, 43, 73, 28, 96, 91, 68, 12, 39, 7, 87, 21, 61, 67];
let kq = document.getElementById('ketqua');
function sapXep(){
    for(let i=0; i< numbers.length;i++){
        let mang=i;
        for(let j = i+1; j< numbers.length; j++)
        {
            if (numbers[j]<numbers[mang]){
                mang=j;
            }
        }
        let giatri=numbers[i];
        numbers[i] = numbers[mang];
        numbers[mang] =giatri;
    }
    console.log(numbers);
    kq.textContent=`[${numbers}]`;
}
