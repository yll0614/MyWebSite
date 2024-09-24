document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止默认提交行为

    // 获取输入的用户名和密码
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 预定义的账号和密码
    const users = {
        'admin': 'jy090614', // 管理员账号
        'lsq': 'lsq', // 用户1
    };

    // 检查输入的用户名是否存在，并验证密码
    if (users[username] && users[username] === password) {
        // 根据用户名跳转到不同页面
        if (username === 'admin') {
            window.location.href = 'admin.html'; // 跳转到管理员页面
        } else {
            window.location.href = `${username}.html`; // 跳转到对应用户页面
        }
    } else {
        // 显示错误信息
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = '用户名或密码错误。'; // 提示用户

        // 3秒后清除错误信息
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 2500);
    }
});
// 显示或隐藏密码
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const icon = this;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // 显示密码
        icon.classList.remove('fa-eye'); // 切换图标
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // 隐藏密码
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

