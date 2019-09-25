'use sctict';

(function (window, document) {

  function setCards () {
    var cards = document.getElementsByClassName('card');

    cardsColoring = function () {
      for (var i = 0; i < cards.length; i++) {
        var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
        var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                .children[0];

        if (pollutVal.children[0].innerText >= 50) {
          cards[i].style.backgroundColor  = '#CC0000';
          cardTitle.style.backgroundColor = '#B80000';
        } else if (30 <= pollutVal.children[0].innerText) {
          cards[i].style.backgroundColor  = '#FF9900';
          cardTitle.style.backgroundColor = '#EB8500';
        } else if (12 <= pollutVal.children[0].innerText) {
          cards[i].style.backgroundColor  = '#FFFF00';
          cardTitle.style.backgroundColor = '#EBEB00';
        } else {
          cards[i].style.backgroundColor  = '#00CC00';
          cardTitle.style.backgroundColor = '#00B800';
        }
      }
    }

    cardsAlignment = function () {
      if (window.matchMedia('(max-width: 550px)').matches) {
        for (var i = 0; i < cards.length; i++) {
          var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
          var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                  .children[0];
          pollutVal.children[0].style.fontSize = '7.8rem';
        }
      } else if (window.matchMedia('(max-width: 768px)').matches) {
        for (var i = 0; i < cards.length; i++) {
          var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
          var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                  .children[0];
          pollutVal.children[0].style.fontSize = '7.8rem';
        }
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        for (var i = 0; i < cards.length; i++) {
          var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
          var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                  .children[0];
          pollutVal.children[0].style.fontSize = '7.8rem';

          if (pollutVal.children[0].innerText > 99) {
            pollutVal.style.marginLeft = '1.3rem';
            pollutVal.children[0].style.fontSize = '6rem';
          } else if (9 < pollutVal.children[0].innerText) {
            pollutVal.style.marginLeft = '2rem';
          }
        }
      } else if (window.matchMedia('(max-width: 1440px)').matches) {
        for (var i = 0; i < cards.length; i++) {
          var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
          var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                  .children[0];
          pollutVal.children[0].style.fontSize = '7.8rem';

          if (pollutVal.children[0].innerText > 99) {
            pollutVal.style.marginLeft = '1rem';
            pollutVal.children[0].style.fontSize = '5.5rem';
          } else if (9 < pollutVal.children[0].innerText) {
            pollutVal.style.marginLeft = '1.3rem';
          }
        }
      } else {
        for (var i = 0; i < cards.length; i++) {
          var cardTitle = cards[i].getElementsByClassName('cardTitle')[0];
          var pollutVal = cards[i].getElementsByClassName('cardInfo')[0]
                                  .children[0];
          pollutVal.children[0].style.fontSize = '6rem';

          if (pollutVal.children[0].innerText > 99) {
            pollutVal.style.marginLeft = '.7rem';
            pollutVal.children[0].style.fontSize = '4.2rem';
          } else if (9 < pollutVal.children[0].innerText) {
            pollutVal.style.marginLeft = '1.1rem';
          }
        }
      }
    }

    cardsColoring();
    cardsAlignment();
    window.onresize = cardsAlignment;
  }


  function setSearch () {
    var cardsContainer = document.getElementById('cardsContainer');
    var cards = document.getElementsByClassName('card');

    hideAllCards = function () {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
      }
    }

    searchByTitle = function () {
      for (var i = 0; i < cards.length; i++) {
        var regTitle = cards[i].getElementsByClassName('cardTitle')[0]
                               .innerText
                               .replace(/\(/g, '.')
                               .replace(/\)/g, '.')
                               .replace(/ /g, '')
                               .toLowerCase();

        var regInput = searchLine.value
                                 .replace(/\(/g, '.')
                                 .replace(/\)/g, '.')
                                 .replace(/ /g, '')
                                 .toLowerCase();

        var result = regTitle.match(regInput);

        if (result) {
          cards[i].style.display = 'block';
        }
      }
    }

    document.getElementById('searchLine').oninput = function () {
      hideAllCards();
      searchByTitle();
    }
  }


  function setSorting () {
    var cards = document.getElementsByClassName('card');

    alphabetSorting = function () {
      var titles    = new Array();
      var rawTitles = cardsContainer.getElementsByClassName('cardTitle');

      for (var i = 0; i < cards.length; i++) {
        titles.push(cards[i].getElementsByClassName('cardTitle')[0].innerText);
      }

      titles.sort();

      for (var i = 0; i < titles.length; i++) {
        for (var n = 0; n < rawTitles.length; n++) {
          if (titles[i] == rawTitles[n].innerText) {
            cardsContainer.appendChild(rawTitles[n].parentNode);
          }
        }
      }

      document.getElementById('pollutionSortBtn')
              .removeAttribute('style');

      document.getElementById('alphabetSortBtn')
              .style
              .backgroundColor = '#dddddd';
    }

    pollutionSorting = function () {
      console.log(this);
      var values    = new Array();
      var rawValues = cardsContainer
                      .querySelectorAll('.airPollutionIndicator .value');

      for (var i = 0; i < cards.length; i++) {
        values.push(cards[i]
                    .querySelectorAll('.airPollutionIndicator .value')[0]
                    .innerText);
      }

      values.sort(function (a, b) {return b-a});

      for (var i = 0; i < values.length; i++) {
        for (var n = 0; n < rawValues.length; n++) {
          if (values[i] == rawValues[n].innerText) {
            cardsContainer.appendChild(rawValues[n]
                                      .parentNode
                                      .parentNode
                                      .parentNode);
          }
        }
      }

      document.getElementById('alphabetSortBtn')
              .removeAttribute('style');

      document.getElementById('pollutionSortBtn')
              .style
              .backgroundColor = '#dddddd';
    }

    reverseOrder = function () {
      var titles    = new Array();
      var rawTitles = cardsContainer.getElementsByClassName('cardTitle');

      for (var i = 0; i < cards.length; i++) {
        titles.push(cards[i].getElementsByClassName('cardTitle')[0].innerText);
      }

      titles.reverse();

      for (var i = 0; i < titles.length; i++) {
        for (var n = 0; n < rawTitles.length; n++) {
          if (titles[i] == rawTitles[n].innerText) {
            cardsContainer.appendChild(rawTitles[n].parentNode);
          }
        }
      }
    }

    document.getElementById('pollutionSortBtn').onclick = pollutionSorting;
    document.getElementById('alphabetSortBtn').onclick = alphabetSorting;
    document.getElementById('orderSortSwitch').onclick = reverseOrder;

    alphabetSorting();
  }


  function setGraph () {
    var cards        = document.getElementsByClassName('card');
    var graph        = document.getElementById('myChart');
    var skeletonCard = document.getElementById('skeletonCard');

    skeletonCard.getElementsByClassName('cardInfo')[0].style.display = 'none';
    skeletonCard.append(graph);
    skeletonCard.setAttribute('pressed', '');

    for (var i = 0; i < cards.length; i++) {
      cards[i].onmouseover = function () {
        graph.style.display = 'block';

        for (var n = 0; n < cards.length; n++) {
          cards[n].getElementsByClassName('cardInfo')[0].style.display = 'flex';
          this.removeAttribute('pressed');
        }

        if (this.hasAttribute('pressed')) {
          this.removeChild(this.lastChild);
          this.removeChild(this.firstChild);
        } else {
          this.getElementsByClassName('cardInfo')[0].style.display = 'none';
          this.append(graph);
          this.setAttribute('pressed', '');
        }
      }

      cards[i].onmouseout = function () {
          this.getElementsByClassName('cardInfo')[0].style.display = 'flex';
          this.removeAttribute('pressed');
          graph.style.display = 'none';
      }
    }
  }

  setCards();
  setSearch();
  setSorting();
  setGraph();

})(window, document);
