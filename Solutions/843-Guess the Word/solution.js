/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    var match = [];
    for(var i = 0; i < wordlist.length; i++){
        match[i] = i;
    }
    
    //do guess.
    var target, str, count;
    for(var i = 0; i < 10; i++){
        str = wordlist[getRandomElement(match)];
        target = master.guess(str);
        if(target === str.length){
            return;
        }
        // check new match;
        var list = [];
        for(var v of match){
            if(wordlist[v] === str){
                continue;
            }
            count = 0; // the count of matches with last guess.
            for(var j = 0; j < str.length; j++){
                if(str[j] === wordlist[v][j]){
                    count++;
                }
            }
            if(count === target){//match!
                list.push(v);
            }
        }
        match = list;
    }
};

function getRandomElement(arr){
    return arr[Math.floor(Math.random() * Math.floor(arr.length))];
}