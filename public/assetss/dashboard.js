var bars = document.getElementById('bars');
var nav_trade_btn = document.getElementById('nav-trade-btn');
var side_panel_left = document.querySelector('.side-panel-left')
var side_panel_right = document.querySelector('.side-panel-right')
var side_dropdown = document.querySelector('.side-dropdown');
var dropdown_btn = document.getElementById('dropdown-btn');
var dropdownBtn = document.querySelector('.dropdown-btn');
var root = document.querySelector(':root')
var toggle_off = document.getElementById('toggle-off')
var toggle_on = document.getElementById('toggle-on')


bars.addEventListener('click', function () {
    side_panel_left.classList.toggle('side-panel-left-toggle')
})

nav_trade_btn.addEventListener('click', function () {
    side_panel_right.classList.toggle('side-panel-right-toggle')
})

dropdown_btn.addEventListener('click', function () {
    side_dropdown.classList.toggle('side-dropdown-toggle')
})

dropdownBtn.addEventListener('click', function () {
    side_dropdown.classList.toggle('side-dropdown-toggle')
})

// toggle_off.addEventListener('click', function () {
//     toggle_off.style.display = 'none'
//     toggle_on.style.display = 'block'
//     root.classList.toggle('dark-mode')
// })

// toggle_on.addEventListener('click', function () {
//     toggle_on.style.display = 'none'
//     toggle_off.style.display = 'block'
//     root.classList.toggle('dark-mode')
// })

