const name = "risab"
const repoCount = 50

//console.log(name + repoCount+"value"); // out dated

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('risabhc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringone = " risab "
console.log(newStringone);
console.log(newStringone.trim());

const ulr = "https://risab.com/risab%10chhetri"

console.log(ulr.replace('%10','-'));

console.log(ulr.includes('risab'));
