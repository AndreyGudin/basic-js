const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  ENGLISH_ALPHABET=['A','B','C','D','E','F','G','H','I','J','K','L',
                        'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  message='';
  codePhrase='';
  decodedPhrase=''
  constructor(isDirect=true){
    this.isDirect=isDirect;
  }
  encrypt(string,code) {
    let encryptResult='';
    let codeExt='';
    let indexOfString=0;
    let indexOfCode=0;
    let indexOfEnCryptedChr=0;
    let j=0;
    if ((string===undefined)||(code===undefined)) throw new Error("Incorrect arguments!");
    for(let i=0;i<string.length;i++){
      if (string[i]!=' ') {
        codeExt+=code[j];
        j++;
        if (j>=code.length) j=0;
      }
      else codeExt+=' ';
    }
    for (let i = 0; i < string.length; i++) {
      indexOfString=this.ENGLISH_ALPHABET.indexOf(string[i].toUpperCase());
      indexOfCode=this.ENGLISH_ALPHABET.indexOf(codeExt[i].toUpperCase());
      if (indexOfString>=0){
        indexOfEnCryptedChr=(indexOfString+indexOfCode)%26;
        this.codePhrase+=this.ENGLISH_ALPHABET[indexOfEnCryptedChr];
      }else this.codePhrase+=string[i];
    }
    encryptResult=this.codePhrase;
    this.codePhrase='';
    return this.isDirect ? encryptResult : encryptResult.split("").reverse().join("");
  }
  decrypt(crypt,code) {
    let decryptResult='';
    let codeExt='';
    let indexOfCrypt=0;
    let indexOfCode=0;
    let indexOfDeCryptedChr=0;
    let j=0;
    if ((crypt===undefined)||(code===undefined)) throw new Error("Incorrect arguments!");
    for(let i=0;i<crypt.length;i++){
      if (crypt[i]!=' ') {
        codeExt+=code[j];
        j++;
        if (j>=code.length) j=0;
      }
      else codeExt+=' ';
    }

    for (let i = 0; i < crypt.length; i++) {
      indexOfCrypt=this.ENGLISH_ALPHABET.indexOf(crypt[i].toUpperCase());
      indexOfCode=this.ENGLISH_ALPHABET.indexOf(codeExt[i].toUpperCase());
      if (indexOfCrypt>=0){
        indexOfDeCryptedChr=(indexOfCrypt-indexOfCode)%26;
        if (indexOfDeCryptedChr<0) indexOfDeCryptedChr=26+indexOfDeCryptedChr;
        this.decodedPhrase+=this.ENGLISH_ALPHABET[Math.abs(indexOfDeCryptedChr)];
      }else this.decodedPhrase+=crypt[i];
    }
    decryptResult=this.decodedPhrase;
    this.decodedPhrase='';
    return this.isDirect ? decryptResult : decryptResult.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
