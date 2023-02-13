
window.RevealNoSwipe = window.RevealNoSwipe || {
    id: 'RevealNoSwipe',
    init: function (deck) {
        initNoTouch(deck);
    }
};

const initNoTouch = function (Reveal) {
    var ready = false;

    Reveal.addEventListener('ready', function (event) {
        ready = true;
        console.log('Loaded No Swipe Plugin')
        let dataframes = document.querySelectorAll(".dataframe");
        dataframes.forEach(dataframe => {
            dataframe.setAttribute('data-prevent-swipe', "")
        });
    });



};