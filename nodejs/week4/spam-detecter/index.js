class Email {
  constructor(subject, body){
      this.subject = subject;
      this.body = body;
  }
}


class SpamDetector{
  isSpam(email) {
      const string = email.subject+ email.body; 
      // contains spam words
     if (string.includes('viagra')||string.includes('offer')||string.includes('free')||string.includes('business proposal')){
          //console.log('SPAM');
          return true;
      }
      // Has more than 60% uppercase characters
       const upperCaseString = string.replace(/[^A-Z]/g, "");
       //console.log(upperCaseString)
      if ( (upperCaseString.length/(string.length))*100 > 60){
          //console.log('SPAM');
          return true;
      } 

      // Subject only contains the string "Hello"
      if (email.subject.replace(/[^a-zA-Z]/g, '').toLowerCase() === 'hello'){
          //console.log('SPAM');
          return true;
      }
      else {
          //console.log('NO SPAM');
          return false;
      }
  }
}

const spamDetector = new SpamDetector();

const emailFromOldFriend = new Email('Hello old friend', 'Long time no see, when should we hang out again??');
console.log(spamDetector.isSpam(emailFromOldFriend)); // false

const emailFromOldFriend1 = new Email('Hello old friend', ' offer Long time no see, when should we hang out again??');
console.log(spamDetector.isSpam(emailFromOldFriend1));//true 
 
const emailFromOldFriend2 = new Email('hello', 'Long time no see, when should we hang out again??');
console.log(spamDetector.isSpam(emailFromOldFriend2));

/* const emailFromOldFriend3 = new Email('HeLLO OLD FRIEND', 'LONG time NO SEE, WHEN we HANG out AGAIN??');
console.log(spamDetector.isSpam(emailFromOldFriend3));//true







 */