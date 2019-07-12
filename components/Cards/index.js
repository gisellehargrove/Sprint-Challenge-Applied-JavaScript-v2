// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardCreator = (options) => {
  const cardsContainer = document.querySelector('.cards-container');
  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = options.headline;
  card.appendChild(headline);

  const authorContainer = document.createElement('div');
  authorContainer.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const imgElem = document.createElement('img');
  imgElem.src = options.authorPhoto;

  const authorName = document.createElement('span');
  authorName.textContent = 'By ' + options.authorName;

  imgContainer.appendChild(imgElem);
  authorContainer.appendChild(imgContainer);
  authorContainer.appendChild(authorName);
  card.appendChild(authorContainer);
  cardsContainer.appendChild(card);

  return card;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
  const articles = response.data.articles;
  const categories = Object.keys(response.data.articles);

  categories.forEach(category => {
    articles[category].forEach(article => {
      cardCreator(article);
    });
  });

});
