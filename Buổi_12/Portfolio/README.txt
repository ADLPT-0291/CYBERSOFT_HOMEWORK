#css
1. Font chữ.
2. Reset để thống nhất trên mọi trình duyệt
3. Config ban đầu: font family, font size.


ctr +d để tìm những đoạn chữ cần bôi đen

# Responsive
- Đặt css màn hình lớn lên trước vì độ ưu tiên css.
max-width: 400px: dành cho màn hình nhỏ hơn 400px 
min-width: 400px: dành cho màn hình lớn hơn 400px

mobile first : dùng min-width
destop first : dùng max-width

center:
-Text-align:center
-margin: 0 auto;
-     display: flex;
    justify-content: center;
    align-items: center; // theo chiều ngang
- height=line-height
- display: grid; place-content: center;
- left: 50%; transform: translateX(-50%)
    - left: 50%; phần trăm theo thẻ cha
    - translateX(-50%); phần trăm theo kích thước của chính nó

tạo lớp : dùng z-index
element nào có z-index cao hơn thì nằm trên
(lưu ý chỉ hoạt động với posision)
nếu như muốn code cho một element bất kỳ nào đó mà 
sử dụng z-index thì sử dụng position: relative cho elenment đó.
