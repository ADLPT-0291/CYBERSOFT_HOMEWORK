<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ẩn / Hiện Nội Dung</title>
    <style>
        /* Ẩn checkbox */
        input[type="checkbox"] {
            display: none;
        }

        /* Tạo nút mũi tên */
        .toggle-label {
            cursor: pointer;
            display: inline-block;
            font-size: 20px;
            transition: transform 0.3s ease;
        }

        /* Khi checkbox được check, xoay mũi tên xuống */
        input[type="checkbox"]:checked + .toggle-label {
            transform: rotate(90deg);
        }

        /* Ẩn nội dung mặc định */
        .content {
            display: none;
        }

        /* Khi checkbox được check, hiển thị nội dung */
        input[type="checkbox"]:checked ~ .content {
            display: block;
        }
    </style>
</head>
<body>

    <!-- Checkbox ẩn -->
    <input type="checkbox" id="toggle">

    <!-- Nhãn (mũi tên) để bấm -->
    <label for="toggle" class="toggle-label">▶</label>

    <!-- Nội dung sẽ hiển thị khi bấm -->
    <div class="content">
        <p>Đây là dòng thứ nhất.</p>
        <p>Đây là dòng thứ hai.</p>
    </div>

</body>
</html>
