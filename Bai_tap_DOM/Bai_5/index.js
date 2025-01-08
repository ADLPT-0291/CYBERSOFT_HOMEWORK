function tong2So(){
    let inputEle1 = document.getElementById('so2chuso');
    let so2chuso = Number(inputEle1.value);
    let hangchuc=(so2chuso-so2chuso%10)/10;
    let donvi=so2chuso%10;
    // console.log(so2chuso-so2chuso%10);
    // console.log(donvi);
    let tong = hangchuc+donvi;
    let btnEle = document.getElementById('ketqua');
    btnEle.textContent=tong;
}