// 获取当前页面路径
const currentPage = location.pathname.split('/').pop();

// 为当前页面导航项添加active类
document.querySelectorAll('.nav a').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
}); 