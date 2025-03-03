function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }

  function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  console.log(introduction("Alice"));

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  
  console.log(introductionWithLanguage("Alice", "JavaScript"));
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introductionWithLanguageOptional("Gracie"));
  console.log(introductionWithLanguageOptional("Gracie", "Python"));  
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introductionWithLanguageOptional("Gracie", "Python"));  
  

