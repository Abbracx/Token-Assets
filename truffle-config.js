const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "^0.8.1"
    }
  }
};


// function KUniqueCharacters(string){
//   k = Number(string.indexAt(0))
//   let temp_word = word = string.subString(1, k+1)
//   let word_end = k

//   while( word_end < string.length -1 ){
//     uniqueWord = new Set(temp_word)
//     if(uniqueWord.size <= k){
//       if(temp_word.length > word.length) word = temp_word
      
//       word_end += 1
//       temp_word += string[word_end]
//     } else {
//       temp_word = temp_word.subString(1, temp_word.length)
//     }
//   }

//   if(temp_word.length > word.length) word = temp_word
//   return word
 
// }