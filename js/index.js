// Your code goes here
const headerTwo = document.querySelectorAll('h2');

headerTwo[0].addEventListener("mouseover", ele => {
    ele.target.style.color = 'blue';
});

const scrollPage = document.querySelector('body');

window.addEventListener('scroll', () => {
    scrollPage.style.backgroundColor = "lightblue";

    setTimeout(() => {
        scrollPage.style.backgroundColor = "";
    }, 3000);
});