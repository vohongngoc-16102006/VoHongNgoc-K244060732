// Tạo dữ liệu cho các ô chọn ngày tháng năm
const daySelect = document.getElementById('day');
for (let i = 1; i <= 31; i++) daySelect.add(new Option(i, i));

const monthSelect = document.getElementById('month');
for (let i = 1; i <= 12; i++) monthSelect.add(new Option(i, i));

const yearSelect = document.getElementById('year');
for (let i = 1970; i <= 2026; i++) yearSelect.add(new Option(i, i));

// Hàm thêm dữ liệu vào bảng
function addData() {
    const table = document.getElementById("memberTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthday = `${document.getElementById('day').value}/${document.getElementById('month').value}/${document.getElementById('year').value}`;
    
    // Lấy sở thích
    let hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => hobbies.push(cb.value));
    
    const color = document.querySelector('input[name="color"]:checked')?.value || "";

    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${gender}</td><td>${birthday}</td><td>${hobbies.join(', ')}</td><td>${color}</td>`;
}