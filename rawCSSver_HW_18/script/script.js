function changeColor() {
  document.getElementById('headlineText').style.color = "#ff0000";
};

function copyToClipboard() {
  document.getElementById('emailAddress').select();
  navigator.clipboard.writeText('emailAddress');
  alert("Copied the text: erik.domnizky@gmail.com");
}