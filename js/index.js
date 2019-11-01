// Your code goes here

const originalImgSrcs = Array.from(document.querySelectorAll('img')).map(element => element.src);
console.log(originalImgSrcs);

const spookyImgSrcs = [
    'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1492515114975-b062d1a270ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1481819434877-23b892ca68ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
];
const headerTwo = document.querySelectorAll('h2');

headerTwo[0].addEventListener("mouseover", item => {
    item.target.style.color = 'blue';
});

const scrollPage = document.querySelector('body');

window.addEventListener('scroll', () => {
    scrollPage.style.backgroundColor = "lightblue";

    setTimeout(() => {
        scrollPage.style.backgroundColor = "";
    }, 3000);
});

//Change images on click
const imgs = document.querySelectorAll('img');
imgs.forEach((element, i) => {
    element.addEventListener('click', () => {
        element.src = spookyImgSrcs[i];
    });

    // Revert images on double click
    element.addEventListener('dblclick', () => {
        element.src = originalImgSrcs[i];
    });
});