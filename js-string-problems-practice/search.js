const lyrics = 'tumi bondu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.';
const searchString = 'pakhi';

// const doesExist = lyrics.includes(pakhi);
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCse = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCse.includes(searchString);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('tumi'));


if(lyrics.indexOf('sada') !== 1){
console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

// startswith

console.log(lyrics.startsWith('2mi'))

// endwith
fileName.endsWith('.pdf');