// Ova e responsive menu
let menu = document.querySelector('.header ul');
let btn = document.querySelector('.header button');

btn.addEventListener('click', mobileMenu = () => {
    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }  
});






// Ova e galerija
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

// Gi pomestuvame slikite vo desno
const moveRight = () => {
    displayNone();
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

// Gi pomestuvame slikite vo levo 
const moveLeft = () => {
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length -1;
    }

    pictures[imgNum].style.display = 'block';
}

// Event listeneri za strelkite
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Ovaa funkcija ke gi skrie site sliki
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}



// Portfolio
let btns = document.querySelectorAll('.portfolio-wrapper .portfolio-categories button');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let clicked_btn = event.target;
        let category = clicked_btn.getAttribute('data-category');
        let portfolioItems = document.querySelectorAll('.portfolio-single-item');

        portfolioItems.forEach((item) => {
            item.style.display = 'none';
        });

        if(category === 'sve') {
            portfolioItems.forEach((item) => {
                item.style.display = 'block';
            });
        }

        portfolioItems.forEach((item)=> {
            if(item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        });     
    });
});




// Otvarame modal
let openModalBtn = document.querySelector('#openModal');
openModalBtn.addEventListener('click', () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
});


// Go zatvarame modalot
let closeModalBtn = document.querySelector('#closeModal');
closeModalBtn.addEventListener('click', () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
});



// Otvarame modal2
let openModalBtn2 = document.querySelector('#openModal2');
openModalBtn2.addEventListener('click', () => {
    let modalWindow2 = document.querySelector('.popup-modal2');
    let overlay2 = document.querySelector('.overlay2');

    modalWindow2.style.display = 'block';
    overlay2.style.display = 'block';
});


// Go zatvarame modalot2
let closeModalBtn2 = document.querySelector('#closeModal2');
closeModalBtn2.addEventListener('click', () => {
    let modalWindow2 = document.querySelector('.popup-modal2');
    let overlay2 = document.querySelector('.overlay2');

    modalWindow2.style.display = 'none';
    overlay2.style.display = 'none';
});