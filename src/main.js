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
viewSavedCoversButton.addEventListener('click', viewSavedCovers);
window.onload = changeCover();
makeMyBookBotton.addEventListener('click', makeMyBook);


// Create your event handlers and other functions here 👇
function changeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  //currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
};

function changeToMakeYourOwn() {
  makeYourOwn.classList.remove('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

  // document.querySelector('.form-view').style.display = "block";
  // document.querySelector('.home-view').style.display = "none";
  // document.querySelector('.home-button').style.display = "block";
  // document.querySelector('.random-cover-button').style.display = "none";
  // document.querySelector('.save-cover-button').style.display = "none";
}

function returnToHomePage() {
  makeYourOwn.classList.add('hidden');
  homePage.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');

  // document.querySelector('.form-view').style.display = "none";
  // document.querySelector('.home-view').style.display = "block";
  // document.querySelector('.home-button').style.display = "none";
  // document.querySelector('.random-cover-button').style.display = "block";
  // document.querySelector('.save-cover-button').style.display = "block";
}

function viewSavedCovers() {
  makeYourOwn.classList.add('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverPage.classList.remove('hidden');
  //savedCovers.forEach(element(saveCoverPage.classList.add('mini-cover')))

  // document.querySelector('.saved-view').style.display = "block";
  // document.querySelector('.form-view').style.display = "none";
  // document.querySelector('.home-view').style.display = "none";
  // document.querySelector('.home-button').style.display = "block";
  // document.querySelector('.random-cover-button').style.display = "none";
  // document.querySelector('.save-cover-button').style.display = "none";
}

function saveCurrentCover() {
  for (var i = 0; i < savedCovers.length; i++)
    if (currentCover !== savedCovers[i]) {
      return savedCovers
    savedCovers.push(currentCover)
  }
}
function saveCurrentCover() {
  for (var i = 0; i < savedCovers.length; i++)
  if (currentCover !== savedCovers[i]) {
    savedCovers.push(currentCover)
  };

function makeMyBook () {
  event.preventDefault()
  coverImage.src = createCoverInput.value;
  coverTitle.innerText = createTitleInput.value;
  tagline1.innerText = createDescriptor1Input.value;
  tagline2.innerText = createDescriptor2Input.value;

  //currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  returnToHomePage()

}



///////////////////////////////////////////////////////////////////////////////////

// function changeSavePage() {
//   saveCoverPage.hide = false
//   homePage.hide = true
// }

  // if (homePage.classList.contains('hidden')) {
  //   homePage.classList.remove('hidden')
  // }

// console.log(savedCovers)
// console.log(currentCover)
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
