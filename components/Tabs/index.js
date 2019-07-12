// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabCreator = (topic) => {
  const tabElem = document.createElement('div');
  tabElem.classList.add('tab');
  tabElem.textContent = topic;
  tabElem.dataset.category = 'all';

  tabElem.addEventListener('click', () => {
    tabElem.dataset.category = topic;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if(card.dataset.category !== tabElem.dataset.category) {
        card.style.display = 'none';
      } else {
        card.style.display = 'flex';
      }
    });
  });

  const topicsContainer = document.querySelector('.topics');
  topicsContainer.appendChild(tabElem);

  return tabElem;
};

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
  response.data.topics.forEach(topic => {
    tabCreator(topic);
  });
});
