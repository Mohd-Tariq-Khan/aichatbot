const chatBox = document.getElementById("chatBox");

function addMessage(message, sender){

const div = document.createElement("div");

div.className =
sender === "user"
? "user-message"
: "bot-message";

div.innerText = message;

chatBox.appendChild(div);

chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(question){

question = question.toLowerCase();

for(let key in faqData){

if(question.includes(key)){
return faqData[key];
}

}

return "Sorry, I couldn't find an answer. Try asking about React, JavaScript, Git, Docker, AI, HTML, CSS, Python or MERN Stack.";
}
function showTyping(){

const typing =
document.createElement("div");

typing.id="typing";

typing.className="bot-message";

typing.innerText="🤖 Typing...";

chatBox.appendChild(typing);

}

function removeTyping(){

const typing=
document.getElementById("typing");

if(typing){

typing.remove();

}

}
function sendMessage(){

const input =
document.getElementById("userInput");

const question =
input.value.trim();

if(question === "") return;

if(question.toLowerCase() === "cls"){
chatBox.innerHTML = "";
input.value = "";
return;
}

addMessage(question,"user");

showTyping();

setTimeout(()=>{
const answer =
getBotReply(question);
removeTyping();
addMessage(answer,"bot");

},500);

input.value="";
}

function quickAsk(question){

document.getElementById("userInput").value =
question;

sendMessage();
}

function handleKey(event){

if(event.key === "Enter"){
sendMessage();
}

}
const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
