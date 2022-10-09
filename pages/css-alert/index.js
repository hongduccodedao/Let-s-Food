// lấy tất cả alert__icon-close
const alertClose = document.querySelectorAll('.alert__icon-close');

// khi click vào alert__icon-close thì sẽ xóa alert
alertClose.forEach((alert) => {
    alert.addEventListener('click', () => {
        alert.parentElement.remove();
    });
});