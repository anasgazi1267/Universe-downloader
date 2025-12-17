function download() {
  const url = document.getElementById("url").value;
  const format = document.getElementById("format").value;
  const result = document.getElementById("result");

  if (!url) {
    alert("Enter video URL");
    return;
  }

  result.innerHTML = "Processing...";

  fetch("/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, format })
  })
  .then(res => res.json())
  .then(data => {
    if (data.url) {
      result.innerHTML = `<a href="${data.url}" target="_blank">Download Now</a>`;
    } else {
      result.innerHTML = "Download failed";
    }
  })
  .catch(() => {
    result.innerHTML = "Server error";
  });
}
