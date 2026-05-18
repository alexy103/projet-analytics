export default defineNuxtPlugin(() => {
  const script = document.createElement("script");

  script.defer = true;
  script.src = "http://localhost:4000/script.js";
  script.setAttribute(
    "data-website-id",
    "bffacb7c-a594-4c3c-bcfe-c44faa50b1b0",
  );

  document.head.appendChild(script);
});
