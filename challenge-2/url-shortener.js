// generate a random string of characters for the short URL
const store = [];
function generateShortUrl() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const generateBtn = document.getElementById("generateBtn");
const longUrlInput = document.getElementById("longUrlInput");
const shortUrlLink = document.getElementById("shortUrlLink");

generateBtn.addEventListener("click", () => {
  const longUrl = longUrlInput.value;
  let shortUrl = generateShortUrl();
  console.log(shortUrl);
  store[0] = longUrl;
  shortUrlLink.href = shortUrl;
  shortUrlLink.textContent = window.location.origin + "/" + shortUrl;
});

shortUrlLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = store[0];
});
