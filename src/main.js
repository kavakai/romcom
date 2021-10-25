var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewButton = document.querySelector('.make-new-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

var saveCoverView = document.querySelector('.saved-covers-section')
var saveCoverPage = document.querySelector('.saved-view');
var homePage = document.querySelector('.home-view');
var makeYourOwn = document.querySelector('.form-view');

var createCoverInput = document.querySelector('#cover');
var createTitleInput = document.querySelector('#title');
var createDescriptor1Input = document.querySelector('#descriptor1');
var createDescriptor2Input = document.querySelector('#descriptor2');
var makeMyBookBotton = document.querySelector('.create-new-book-button');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
console.log(savedCovers)

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

saveCoverView.addEventListener('dblclick', removeCover);

function changeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
};

function changeToMakeYourOwn() {
  makeYourOwn.classList.remove('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverPage.classList.add('hidden');
};

function returnToHomePage() {
  makeYourOwn.classList.add('hidden');
  homePage.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  saveCoverPage.classList.add('hidden');
};

function viewSavedCovers(saveCoverPage) {
  makeYourOwn.classList.add('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  saveCoverPage.classList.remove('hidden');
};

function showCovers(savedCovers) {
  saveCoverView.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
  saveCoverView.innerHTML +=
  `<section class="mini-cover" id = ${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>`;
  console.log(savedCovers);
  }
};

function removeCover() {
  var num = Number(event.target.closest("section").id)
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id === num) {
        savedCovers.splice([i],1)
        console.log(savedCovers);
      }
    }
  showCovers()
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
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
