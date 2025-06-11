let count = 0;
window.onload = function() {
    const counterElement = document.getElementById("counter");
    const buttonElement = document.getElementById("click");
    buttonElement.onclick = function() {
        count++;
        counterElement.textContent = count;
    };

  }
  
let Count = 0;
// const textbox = document.getElementById("textbox");
// const wordcountdisplay = document.getElementById("wordcounter");
// function countwords(){
        
//         const textarea = document.getElementById("textbox");
//         const text = textarea.value.trim();
//         const wordCount = text ===""?0 : text.split(/\s+/).length;
//         document.getElementById('wordCount').textContent = ` word count: ${wordCount}`;
// }  
function countwords() {
  const textarea = document.getElementById("textbox");
  const text = textarea.value;

  const trimmedText = text.trim();
  const wordCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;
  

  document.getElementById("wordCount").textContent = `Word count: ${wordCount}`;
  countchar(text);
}
  function countchar(text) {
    const charcount = text.length;
  
  document.getElementById("charCount").textContent = `character count: ${charcount}`;
}