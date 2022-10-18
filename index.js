function introduction (name) {
    console.log("Hi, my name is ${name}.")
 }
 introduction()
 function introductionWithLanguage(name, language) {
     console.log("Hi, my name is ${name} and I am learning to program in ${language}.");
   }
 introductionWithLanguage()
   function introductionWithLanguage(name, language="JavaScript") {
     console.log("Hi, my name is ${name} and I am learning to program in ${language}.");
   }
 introductionWithLanguage()