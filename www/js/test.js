document.querySelector('.sidebar-open').addEventListener('click', function () {
    document.querySelector('#sidebar').setAttribute('active', 'on');
}, false);

document.querySelector('.sidebar-close').addEventListener('click', function () {
    document.querySelector('#sidebar').setAttribute('active', 'off');
}, false);

document.querySelector('.view-open').addEventListener('click', function () {
    document.querySelector('#view').setAttribute('active', 'on');
}, false);

document.querySelector('.nav-back').addEventListener('click', function () {
    document.querySelector('#view').setAttribute('active', 'off');
}, false);
