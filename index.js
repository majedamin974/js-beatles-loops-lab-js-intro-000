// add solution here
function theBeatlesPlay(musicians, instruments) {
    var arr = [];

    for (let i = 0; i < musicians.length; i++) {
        arr.push(musicians[i] + " plays " + instruments[i]);
    }

    return arr;
}

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
    var i = 0;

    while (i < array.length) {
        array[i] = array[i] + "!!!";
        i++;
    }
    return array;
}

function iLoveTheBeatles(number) {
    var arr = [];

    do {

        arr.push("I love the Beatles!");
        number++;

    } while (number < 15);

    return arr;
}
