let members = [];

let tableDanhSach = document.getElementById('tableDanhSach');
function rederTable(member) {
    let content = "";
    console.log(member);
    members.forEach(function(member) {
        content += `
        <tr>
            <td>${member.taikhoan}</td>
            <td>${member.hoVaTen}</td>
            <td>${member.Email}</td>
            <td>${member.date}</td>
            <td>${member.chucVu}</td>
            <td>${member.tongLuong}</td>
            <td>${member.xepLoai}</td>
            <td>
                <button style = "border:none; background-color: #FFFFFF;" 
                data-toggle="modal" data-target="#myModal" 
                onclick="settingMember('${member.taikhoan}')">
                <em class="fa fa-cog"></em></button>
                <button style = "border:none; background-color: #FFFFFF;"
                onclick="deleteMember( '${member.taikhoan}' )">
                <em class="fa fa-trash"></em></button>
            </td>
        </tr>`;

    });
    tableDanhSach.innerHTML = content;
    console.log("Giá trị table",content);
    // Ghi dữ liệu vào localStorage
}   

// rederTable(members);

function showButtonAdd(){
    document.getElementById("btnCapNhat").style.display="none";
    document.getElementById("btnThemNV").style.display="block";
}

function hiddenButtonAdd(){
    document.getElementById("btnCapNhat").style.display="block";
    document.getElementById("btnThemNV").style.display="none";
}

function addMember(){
    console.log("Adding member...");
    
    // Lấy dữ liệu từ form
    let taikhoan = document.getElementById("tknv").value;
    let hoVaTen = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value;
    let chucVu = document.getElementById("chucvu").value;
    let gioLam = document.getElementById("gioLam").value;
    let tongLuong = 0;
    let xepLoai = "";



    // Kiểm tra dữ liệu tài khoản nhập vào
    if (taikhoan === "") {
        alert("Vui lòng nhập tên tài khoản");
        return;
    }
    else if (!Number(taikhoan)) {
        alert("Vui lòng nhập tài khoản là số");
        return;
    }
    else if (taikhoan.length < 4 || taikhoan.length > 6) {  
        alert("Tài khoản phải từ 4 đến 6 ký tự");
        return;
    }

    // kiểm tra Họ Và Tên
    if (hoVaTen === "") {
        alert("Vui lòng nhập Họ Và Tên");
        return;
    }
    else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(hoVaTen)) {
        alert("Vui lòng nhập họ và tên là chữ");
        return;
    }
    // Kiểm tra email
    if (Email === "") {
        alert("Vui lòng nhập Email");
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
        alert("Bạn đã sai định dạng. Vui lòng nhập lại ");
        return;
    }
    // Kiểm tra mật khẩu
    if (password === "") {
        alert("Vui lòng nhập mật khẩu");
        return;
    }
    else if (password.length < 6 || password.length > 10) {
        alert("Mật khẩu phải từ 6 đến 10 ký tự");
        return;
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,10}$/.test(password)) {
        alert("Mật khẩu phải có ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt");
        return;
    }
    // Kiểm tra ngày làm
    if (date === "") {
        alert("Vui lòng nhập ngày làm");
        return;
    }
    // Kiểm tra lương cơ bản
    if (luongCB === "") {
        alert("Vui lòng nhập lương cơ bản");
        return;
    }
    else if (luongCB < 1000000 || luongCB > 20000000) {
        alert("Lương cơ bản không hợp lệ");
        return;
    }
    // Chọn chức vụ
    if (chucVu === "") {
        alert("Vui lòng chọn chức vụ");
        return;
    }
    else if (chucVu === "1") {
        chucVu = "Sếp";
        tongLuong = luongCB * 3;
    }
    else if (chucVu === "2") {
        chucVu = "Trưởng phòng";
        tongLuong = luongCB *2;
    }
    else if (chucVu === "3") {
        chucVu = "Nhân viên";
        tongLuong = luongCB * 1;
    }
    // Giờ làm
    if (gioLam === "") {
        alert("Vui lòng nhập giờ làm");
        return;
    }
    else if (gioLam < 80 || gioLam > 200) {
        alert("Giờ làm không hợp lệ");
        return;
    }
    // Xác định xếp loại dựa trên giờ làm
    if (gioLam >= 192) {
        xepLoai = "Xuất sắc";
    }
    else if (gioLam >= 176) {
        xepLoai = "Tốt";
    }
    else if (gioLam >= 160) {
        xepLoai = "Khá";
    }
    else{
        xepLoai = "Trung bình";
    }

    let member = {
        taikhoan: taikhoan,
        hoVaTen: hoVaTen,
        Email: Email,
        password: password,
        date: date,
        luongCB: luongCB,
        chucVu: chucVu,
        tongLuong: tongLuong,
        gioLam: gioLam,
        xepLoai: xepLoai
    }

    // Thêm thành viên vào mảng
    members.push(member);
    console.log(members);
    rederTable();

    // Kiểm tra dữ liệu hợp lệ
}




function settingMember(taikhoan){
    hiddenButtonAdd();
    let member = members.find(function(member){
        return member.taikhoan === taikhoan;
    });
    console.log("xin chao",member);
    document.getElementById("tknv").value = member.taikhoan;
    document.getElementById("name").value = member.hoVaTen;
    document.getElementById("email").value = member.Email;
    document.getElementById("password").value = member.password;
    document.getElementById("datepicker").value = member.date;
    chucVu = member.chucVu;
    tongLuong = member.tongLuong;
    document.getElementById("gioLam").value = member.gioLam;

    if(chucVu === "Sếp"){
        chucVu = 1;
        luongCB = Number(tongLuong) / 3;
    }
    else if(chucVu === "Trưởng phòng"){
        chucVu = 2;
        luongCB = Number(tongLuong) / 2;
    }
    else if(chucVu === "Nhân viên"){
        chucVu = 3;
        luongCB = Number(tongLuong) / 1;
    }
    else{
        chucVu = 0;
        luongCB = 0;
    }
    document.getElementById("luongCB").value = luongCB;
    document.getElementById("chucvu").value = chucVu;
}

let member_tk = null;
function updateMember(){
    console.log("Updating member...");
    // Lấy dữ liệu từ form
    let taikhoan = document.getElementById("tknv").value;
    let hoVaTen = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value;
    let chucVu = document.getElementById("chucvu").value;
    let gioLam = document.getElementById("gioLam").value;
    let tongLuong = 0;
    let xepLoai = "";
    // Kiểm tra dữ liệu tài khoản nhập vào
    if (taikhoan === "") {
        alert("Vui lòng nhập tên tài khoản");
        return;
    }
    else if (!Number(taikhoan)) {
        alert("Vui lòng nhập tài khoản là số");
        return;
    }
    else if (taikhoan.length < 4 || taikhoan.length > 6) {  
        alert("Tài khoản phải từ 4 đến 6 ký tự");
        return;
    }

    // kiểm tra Họ Và Tên
    if (hoVaTen === "") {
        alert("Vui lòng nhập Họ Và Tên");
        return;
    }
    else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(hoVaTen)) {
        alert("Vui lòng nhập họ và tên là chữ");
        return;
    }
    // Kiểm tra email
    if (Email === "") {
        alert("Vui lòng nhập Email");
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
        alert("Bạn đã sai định dạng. Vui lòng nhập lại ");
        return;
    }
    // Kiểm tra mật khẩu
    if (password === "") {
        alert("Vui lòng nhập mật khẩu");
        return;
    }
    else if (password.length < 6 || password.length > 10) {
        alert("Mật khẩu phải từ 6 đến 10 ký tự");
        return;
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,10}$/.test(password)) {
        alert("Mật khẩu phải có ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt");
        return;
    }
    // Kiểm tra ngày làm
    if (date === "") {
        alert("Vui lòng nhập ngày làm");
        return;
    }
    // Kiểm tra lương cơ bản
    if (luongCB === "") {
        alert("Vui lòng nhập lương cơ bản");
        return;
    }
    else if (luongCB < 1000000 || luongCB > 20000000) {
        alert("Lương cơ bản không hợp lệ");
        return;
    }
    // Chọn chức vụ
    if (chucVu === "") {
        alert("Vui lòng chọn chức vụ");
        return;
    }
    else if (chucVu === "1") {
        chucVu = "Sếp";
        tongLuong = luongCB * 3;
    }
    else if (chucVu === "2") {
        chucVu = "Trưởng phòng";
        tongLuong = luongCB *2;
    }
    else if (chucVu === "3") {
        chucVu = "Nhân viên";
        tongLuong = luongCB * 1;
    }
    // Giờ làm
    if (gioLam === "") {
        alert("Vui lòng nhập giờ làm");
        return;
    }
    else if (gioLam < 80 || gioLam > 200) {
        alert("Giờ làm không hợp lệ");
        return;
    }
    // Xác định xếp loại dựa trên giờ làm
    if (gioLam >= 192) {
        xepLoai = "Xuất sắc";
    }
    else if (gioLam >= 176) {
        xepLoai = "Tốt";
    }
    else if (gioLam >= 160) {
        xepLoai = "Khá";
    }
    else{
        xepLoai = "Trung bình";
    }

    let member = {
        taikhoan: taikhoan,
        hoVaTen: hoVaTen,
        Email: Email,
        password: password,
        date: date,
        luongCB: luongCB,
        chucVu: chucVu,
        tongLuong: tongLuong,
        gioLam: gioLam,
        xepLoai: xepLoai
    }
    // Tìm vị trí của thành viên trong mảng members
    let index = members.findIndex(function(member){
        return member.taikhoan === taikhoan;
    });
    // Cập nhật thông tin thành viên trong mảng members
    members[index] = member;
    console.log(members);
    rederTable(members);
}

function deleteMember(taikhoan){
    let index = members.findIndex(function(member){
        return member.taikhoan === taikhoan;
    });
    if(index !== -1){
        members.splice(index, 1);
        rederTable(members);
    }
}
function searchMember(){
    let search = document.getElementById("searchName").value;
    console.log("Giá trị tìm kiếm",search);
    if (search === ""){
        alert("Vui lòng nhập tên cần tìm kiếm");
        return;
    }
    else if (search === "Xuất sắc" || search === "Tốt" || search === "Khá" || search === "Trung bình"){
        let result = members.filter(function(member){
            return member.xepLoai === search;
        });
// Nếu không có kết quả, thông báo và không làm gì
if (result.length === 0) {
    console.log("Không có thành viên với xếp loại này.");
} else {
    tableDanhSach.innerHTML = ""; // Xóa dữ liệu cũ trong bảng
    let content = ""; // Khởi tạo biến chứa nội dung bảng
    // Duyệt qua các thành viên tìm được và hiển thị tất cả thông tin của họ
    result.forEach(function(member) {
        content += `
        <tr>
            <td>${member.taikhoan}</td>
            <td>${member.hoVaTen}</td>
            <td>${member.Email}</td>
            <td>${member.date}</td>
            <td>${member.chucVu}</td>
            <td>${member.tongLuong}</td>
            <td>${member.xepLoai}</td>
            <td>
                <button style = "border:none; background-color: #FFFFFF;" 
                data-toggle="modal" data-target="#myModal" 
                onclick="settingMember('${member.taikhoan}')">
                <em class="fa fa-cog"></em></button>
                <button style = "border:none; background-color: #FFFFFF;"
                onclick="deleteMember( '${member.taikhoan}' )">
                <em class="fa fa-trash"></em></button>
            </td>
        </tr>`;

    });
    tableDanhSach.innerHTML = content;
    };
    }
    else
    {
        alert("Vui lòng nhập lại Xếp loại");
        return;
    }
}