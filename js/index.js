const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
const logo = document.querySelector('#logo-img');
logo.src = siteContent['nav']['img-src'];

// Nav bar items
const anchorItems = document.querySelectorAll('a');

anchorItems[0].textContent = siteContent['nav']['nav-item-1'];
anchorItems[1].textContent = siteContent['nav']['nav-item-2'];
anchorItems[2].textContent = siteContent['nav']['nav-item-3'];
anchorItems[3].textContent = siteContent['nav']['nav-item-4'];
anchorItems[4].textContent = siteContent['nav']['nav-item-5'];
anchorItems[5].textContent = siteContent['nav']['nav-item-6'];

anchorItems[0].style.color = 'green';
anchorItems[1].style.color = 'green';
anchorItems[2].style.color = 'green';
anchorItems[3].style.color = 'green';
anchorItems[4].style.color = 'green';
anchorItems[5].style.color = 'green';

const navBar = document.querySelector('nav');
const firstItem = document.createElement('a');
const lastItem = document.createElement('a');

firstItem.href = '#';
firstItem.textContent = 'First';
firstItem.style.color = 'green';

lastItem.href = '#';
lastItem.textContent = 'Last';
lastItem.style.color = 'green';

navBar.prepend(firstItem);
navBar.append(lastItem);

// cta section
const ctaText = document.querySelector('.cta .cta-text')
const currentH1 = document.querySelector('h1');
const h1Arr = siteContent['cta']['h1'].split(' ');
const domH1 = document.createElement('h1');
const isH1 = document.createElement('h1');

ctaText.prepend(isH1);
ctaText.prepend(domH1);

domH1.textContent = h1Arr[0];
isH1.textContent = h1Arr[1];
currentH1.textContent = h1Arr[2];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];
headerImg.alt = 'Main header ciricle image';

// Main content section
const mainHeading = document.querySelectorAll('.main-content .text-content h4');
const mainContent = document.querySelectorAll('.main-content .text-content p')
const middleImg = document.querySelector('#middle-img');

mainHeading[0].textContent = siteContent['main-content']['features-h4'];
mainContent[0].textContent = siteContent['main-content']['features-content'];

mainHeading[1].textContent = siteContent['main-content']['about-h4'];
mainContent[1].textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

mainHeading[2].textContent = siteContent['main-content']['services-h4'];
mainContent[2].textContent = siteContent['main-content']['services-content'];

mainHeading[3].textContent = siteContent['main-content']['product-h4'];
mainContent[3].textContent = siteContent['main-content']['product-content'];

mainHeading[4].textContent = siteContent['main-content']['vision-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

// Contact section
const contactH4 = document.querySelector('.contact h4');
const contactContent = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];

contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

// Footer section
const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright'];

// Stretch goals
const header = document.querySelector('header');
header.style.background = 'lightgrey'

const ctaSection = document.querySelector('.cta');
ctaSection.style.background = 'darkgrey';

const mainSection = document.querySelector('.main-content');
mainSection.style.background = 'black';
mainSection.style.color = 'white';
