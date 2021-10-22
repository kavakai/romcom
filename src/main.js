// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var homeButton = document.querySelector('.home-button hidden');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewButton = document.querySelector('.make-new-button');

var saveCoverPage = document.querySelector('.saved-view');
var homePage = document.querySelector('.home-view');
var makeYourOwn = document.querySelectorAll('.form-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage, coverImage, tagline1, tagline2);

// Add your event listeners here 👇
randomButton.addEventListener('click', changeCover);
saveCoverButton.addEventListener('click', changeSavePage);
makeNewButton.addEventListener('click', changeToMakeYourOwn)
// .unload method
//class at make a new book form

// Create your event handlers and other functions here 👇
  function changeCover() {
    coverImage.src = covers[getRandomIndex(covers)];
    coverTitle.innerText = titles[getRandomIndex(titles)];
    tagline1.innerText = descriptors[getRandomIndex(descriptors)];
    tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  };

  function changeToMakeYourOwn() {
    homePage.hidden = true;
    makeYourOwn.hidden = false;
    saveCoverPage.hidden = true;
  }

  function changeSavePage() {
    saveCoverPage.hidden = false
    homePage.hidden = true
  }

  // if (homePage.classList.contains('hidden')) {
  //   homePage.classList.remove('hidden')
  // }
console.log(saveCoverPage)
console.log(homePage)
// function changeCover(covers, titles, descriptors) {
//   for (var i = 0; i < covers.length; i++)
//     if(currentCover === covers[i]) {
//       covers++
//     }
// }

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
