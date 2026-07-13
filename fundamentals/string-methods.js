
let sentence = "   JavaScript is amazing and JavaScript is powerful   ";
let sentences = sentence.trim();
let password = "mypassword123";
let email = "rupesh@gmail.com";

console.log(`Space Removed: ${sentences} \n
To upper case: ${sentences.toUpperCase()} \n
To lower case: ${sentences.toLowerCase()} \n
Length: ${sentences.length} \n
First character: ${sentences[0]} \n
Last character: ${sentences.charAt(sentences.length - 1)}, ${sentences.slice(-1)}, ${sentences[sentences.length-1]}, ${sentences.at(-1)} \n
Position of amazing: ${sentences.indexOf("amazing")} \n
Does sentence contain powerful: ${sentences.includes("powerful")}\n

Replacing one JavaScript: ${sentences.replace("JavaScript", "JS")}\n
Replacing all JavaScript: ${sentences.replaceAll("JavaScript", "JS")}

Extracting slice: ${sentences.slice(sentences.indexOf("amazing"), sentences.indexOf("amazing") + 7)} \n

Password masker: ${"*".repeat(password.length)} \n

Email checker: ${email.includes("@") && email.includes(".")} \n

Name extract: ${email.slice(0, email.indexOf("@"))} \n

Word count: ${sentences.split(" ").length} \n
Character count: ${sentences.length} \n
Letters count: ${sentences.replaceAll(" ", "").length}


`);
