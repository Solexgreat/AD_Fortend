function letterFinder(word, match) {
    var conditional = typeof(word) == 'string' && word.length >= 2;
    var conditiona2 = typeof(match) == 'string' && match.length == 1;
    if (conditional && conditiona2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else{
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder(3,4);
letterFinder("cat", "c");
