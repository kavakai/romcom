// Create variables targeting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

var saveCoverPage = document.querySelector('.saved-view');
var homePage = document.querySelector('.home-view');
var makeYourOwn = document.querySelector('.form-view');

var createCoverInput = document.querySelector('#cover');
var createTitleInput = document.querySelector('#title');
var createDescriptor1Input = document.querySelector('#descriptor1');
var createDescriptor2Input = document.querySelector('#descriptor2');

// var createCover = document.querySelector('.cover');
// var createTitle = document.querySelector('.user-title');
// var createDescriptor1 = document.querySelector('.descriptor1');
// var createDescriptor2 = document.querySelector('.descriptor2');

var makeMyBookBotton = document.querySelector('.create-new-book-button');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)

// Add your event listeners here 👇
randomButton.addEventListener('click', changeCover);
saveCoverButton.addEventListener('click', saveCurrentCover);
makeNewButton.addEventListener('click', changeToMakeYourOwn);
homeButton.addEventListener('click', returnToHomePage);
viewSavedCoversButton.addEventListener('click', function() {
  viewSavedCovers(saveCoverPage)
  showCovers(savedCovers)
});
window.onload = changeCover();
makeMyBookBotton.addEventListener('click', makeMyBook);


// Create your event handlers and other functions here 👇
function changeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
};

function changeToMakeYourOwn() {
  makeYourOwn.classList.remove('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverPage.classList.add('hidden');
}

function returnToHomePage() {
  makeYourOwn.classList.add('hidden');
  homePage.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function viewSavedCovers(saveCoverPage) {
  makeYourOwn.classList.add('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverPage.classList.remove('hidden');
}

function showCovers(savedCovers) {
  for (var i = 0; i < savedCovers.length; i++)
  saveCoverPage.innerHTML = `
  <section class=${'saved-view'}>
  <section class=${'saved-covers-section'}>
  <img class=${'mini-cover'} src=${savedCovers[i].cover}>
  <h2 class=${'mini-cover-title'}>${savedCovers[i].title}</h2>
  <h3 class=${'mini-cover-title:first-letter'}>A tale of <span class=${'mini-cover-tagline'}>${savedCovers[i].tagline1}</span> and <span class=${'mini-cover-tagline'}>${savedCovers[i].tagline2}</span></h3>
  <img class=${'mini-cover'} src="./assets/overlay.png">`
  console.log(savedCovers)

}

function saveCurrentCover() {
  for (var i = 0; i < savedCovers.length; i++)
    if (currentCover === savedCovers[i]) {
      return savedCovers
    } savedCovers.push(currentCover)
};



function makeMyBook () {
  event.preventDefault()
  coverImage.src = createCoverInput.value;
  coverTitle.innerText = createTitleInput.value;
  tagline1.innerText = createDescriptor1Input.value;
  tagline2.innerText = createDescriptor2Input.value;
  returnToHomePage()
}



///////////////////////////////////////////////////////////////////////////////////



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
