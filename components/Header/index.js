// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const headerElem = document.createElement('div');
  const dateElem = document.createElement('span');
  const h1 = document.createElement('h1');
  const tempElem = document.createElement('span');
  const headerContainer = document.querySelector('.header-container');

  dateElem.textContent = 'March 28 2019';
  h1.textContent = 'Lambda Times';
  tempElem.textContent = '98°';

  headerElem.classList.add('header');
  dateElem.classList.add('date');
  tempElem.classList.add('temp');

  headerElem.appendChild(dateElem);
  headerElem.appendChild(h1);
  headerElem.appendChild(tempElem);

  headerContainer.appendChild(headerElem);

  return headerElem;
}
