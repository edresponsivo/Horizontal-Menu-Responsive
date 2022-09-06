const header = document.querySelector('.main-header');
console.log(header.outerHTML);
const codeString = `<pre>${header.outerHTML}</pre>`;
console.log(codeString);

const code_container = document.querySelector('.code-container');
// code_container.innerText = header.outerHTML;
