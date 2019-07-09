'use strict'

const refs = {
    sidebar: document.querySelector('#sidebar'),
    toggleBtn: document.querySelector('.toggle-btn'),
    navItem: document.querySelector('.nav__item'),
    subnav: document.querySelector('.subnav'),
}

const openMenu = function() {
    setTimeout(() => {
        refs.sidebar.classList.toggle('active');
    }, 200);
    refs.toggleBtn.classList.toggle('close-btn');
    if(refs.subnav.className.includes('activated')) {
        refs.subnav.classList.remove('activated');
    }
}

const openSubNav = function(event) {
    if(event.target.nodeName == 'LI' || event.target.nodeName == 'A') {
        refs.subnav.classList.toggle('activated');
    } else {
        refs.subnav.classList.remove('activated');
    }
}

const closeMenu = function(event) {
    if(event.target.nodeName == 'A' && event.target.className == 'subnav__item__link') {
        setTimeout(() => {
            refs.sidebar.classList.toggle('active');    
        }, 300);
    }
}

refs.navItem.addEventListener('click', openSubNav);
refs.sidebar.addEventListener('click', closeMenu)