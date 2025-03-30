const toggleMenu = () => {
  console.log('toggleMenu');
  const nav_menu = document.querySelector('.nav__menu');
  nav_menu.classList.toggle('show');
  // nav_menu.classList.remove('show')
};
const handleFloatingButton = () => {
  const floatingButton = document.querySelector('#floating-button');
  floatingButton.addEventListener('click', () => {
    console.log('handleFloatingButton');
    window.scrollTo({
      top: 0,
      //behavior: 'smooth',
    });
  });
};
const init = () => {
  console.log('dlcik');
  const menu_toggle = document.querySelector('#nav-toggle');
  menu_toggle.addEventListener('click', () => {
    toggleMenu();
  });
  const nav_link_list = document.querySelectorAll('.nav__link');
  nav_link_list.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
};
init();
const options = {
  threshold: 1,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    //console.log(sectionId);
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');
      const items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      items.forEach((el) => {
        el.classList.remove('active-link');
      });
    }
  });
}, options);
const sectionList = document.querySelectorAll('.section');
sectionList.forEach((el) => {
  //console.log('>>>', el);
  observer.observe(el);
});
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.about, ,skills,work,contact');
// scrollReveal.reveal('.home_data, .about_img');
// scrollReveal.reveal('.home_img .about_img', { delay: 400 });

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 300,
  waituntilVisible: true,
});
typeit.type('').go();

const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  const name = contactForm.name.value;
  const title = contactForm.title.value;
  const message = contactForm.message.value;
  const to = 'neo0531@nate.com';

  location.href = `mailto:${to}?subject=[${name}님 문의${title}]&body=${message}`;
});
