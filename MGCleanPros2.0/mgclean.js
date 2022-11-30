console.log('hello')

//------ Select items ------//
const body = document.querySelector('body');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const nav = document.querySelector('nav');

const modalCont = document.getElementById('modal-container');
const modalClose = document.getElementById('close-modal');
const modalForm = document.getElementById('modal');
const submit = document.getElementById('submit-btn');

const about = document.getElementById('about-tab');
const services = document.getElementById('services-tab');
const gallery = document.getElementById('gallery-tab');
const reviews = document.getElementById('reviews-tab');
const contact = document.getElementById('contact-tab');

const aboutSection = document.getElementById('about-section');
const servicesSection = document.getElementById('services-section');
const gallerySection = document.getElementById('gallery-section');
const reviewsSection = document.getElementById('reviews-section');
const contactSection = document.getElementById('contact-section');

const readMoreService = document.querySelectorAll('.ex1');
const readLessService = document.querySelectorAll('.ex2');
const serviceDescription = document.querySelectorAll('.services-description');
//----- Interactive menu for mobile devices -----//
openMenu.addEventListener('click', () => {
    nav.classList.remove('hide');
    closeMenu.classList.remove('hide');
    openMenu.classList.add('hide')

    closeMenu.addEventListener('click', () => {
        nav.classList.add('hide');
        closeMenu.classList.add('hide');
        openMenu.classList.remove('hide')
    });
});

window.addEventListener('scroll', () => {
    nav.classList.add('hide');
    closeMenu.classList.add('hide');
    openMenu.classList.remove('hide');
});

//----- Smooth scroll transition for navbar -----//
about.addEventListener('click', () => {
    aboutSection.scrollIntoView({behavior: "smooth"});
});

services.addEventListener('click', () => {
    servicesSection.scrollIntoView({behavior: "smooth"});
});

gallery.addEventListener('click', () => {
    gallerySection.scrollIntoView({behavior: "smooth"});
});

reviews.addEventListener('click', () => {
    reviewsSection.scrollIntoView({behavior: "smooth"});
});

contact.addEventListener('click', () => {
    contactSection.scrollIntoView({behavior: "smooth"});
});

//----- Function for modal pop-up for bookings and functionality of modal -----//

setTimeout(() => {
    modalCont.classList.remove('hide');
}, 1000);


modalClose.addEventListener('click', () => {
    modalCont.classList.add('hide');
});

submit.addEventListener('click', () => {
    submit.disabled = true;
    submit.insertAdjacentHTML('afterend', '<p class="submit-tag">*Thank you! Someone from our team will reach out to you shortly.</p>');
    setTimeout(() => {
        modalCont.classList.add('hide');
    }, 3000);
});

//----- Functions to open "read more" on service items -----//

readMoreService[0].addEventListener('click', () => {
    serviceDescription[0].classList.remove('hide');
    readMoreService[0].classList.add('hide');
    readLessService[0].classList.remove('hide');

    readLessService[0].addEventListener('click', () => {
        serviceDescription[0].classList.add('hide');
        readMoreService[0].classList.remove('hide');
        readLessService[0].classList.add('hide');
    });
});

readMoreService[1].addEventListener('click', () => {
    serviceDescription[1].classList.remove('hide');
    readMoreService[1].classList.add('hide');
    readLessService[1].classList.remove('hide');

    readLessService[1].addEventListener('click', () => {
        serviceDescription[1].classList.add('hide');
        readMoreService[1].classList.remove('hide');
        readLessService[1].classList.add('hide');
    });
});

readMoreService[2].addEventListener('click', () => {
    serviceDescription[2].classList.remove('hide');
    readMoreService[2].classList.add('hide');
    readLessService[2].classList.remove('hide');

    readLessService[2].addEventListener('click', () => {
        serviceDescription[2].classList.add('hide');
        readMoreService[2].classList.remove('hide');
        readLessService[2].classList.add('hide');
    });
});

readMoreService[3].addEventListener('click', () => {
    serviceDescription[3].classList.remove('hide');
    readMoreService[3].classList.add('hide');
    readLessService[3].classList.remove('hide');

    readLessService[3].addEventListener('click', () => {
        serviceDescription[3].classList.add('hide');
        readMoreService[3].classList.remove('hide');
        readLessService[3].classList.add('hide');
    });
});

readMoreService[4].addEventListener('click', () => {
    serviceDescription[4].classList.remove('hide');
    readMoreService[4].classList.add('hide');
    readLessService[4].classList.remove('hide');

    readLessService[4].addEventListener('click', () => {
        serviceDescription[4].classList.add('hide');
        readMoreService[4].classList.remove('hide');
        readLessService[4].classList.add('hide');
    });
});

//----- GALLERY -----//

// select gallery items
const galleryCarousel = [
    {image: 'kitchen2-img.jpg'},
    {image: 'kitchen-img.jpg'},
    {image: 'employee-img.jpg'},
    {image: 'intro-img.jpg'}
];

const img = document.getElementById('img');
const nxtBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentItem = 0;

// load initial image in html
window.addEventListener('DOMContentLoaded', () => {
    showGalleryItem();
});

// show current item
const showGalleryItem = () => {
    const item = galleryCarousel[currentItem];
    img.src = item.image;
};

// show next item
nxtBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > galleryCarousel.length - 1) {
        currentItem = 0;
    };
    showGalleryItem();
});

// show previous item
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = galleryCarousel.length - 1;
    };
    showGalleryItem();
});