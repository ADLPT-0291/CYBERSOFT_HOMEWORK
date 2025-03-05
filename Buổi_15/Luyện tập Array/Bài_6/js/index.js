let numbers = [58, 31, 98, 82, 57, 22, 43, 73, 28, 96, 91, 68, 12, 39, 7, 87, 21, 61, 67];
let ketquachan = document.getElementById('ketquachan');
let ketquale = document.getElementById('ketquale');
let ketQuaChan =[], ketQuaLe=[];
function locChanLe(){
    for(let i=0; i< numbers.length;i++){
        if(numbers[i]%2){
            ketQuaLe.push(numbers[i]);
        }
        else
        {
            ketQuaChan.push(numbers[i]);
        } 
    }
    ketquachan.textContent=`[${ketQuaChan}]`;
    ketquale.textContent=`[${ketQuaLe}]`;
}
