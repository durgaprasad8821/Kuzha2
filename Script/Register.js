document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const data = { name, email, phone, education, password };
  const corsProxy = "https://cors-anywhere.herokuapp.com/";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxnvnqYzbTouBBGID-cMuoXNjBJ60lb9VKqGgOfTheDyd1O02r6qlElSTRbnK4INVpX/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

const contentType = response.headers.get("content-type");

if (contentType && contentType.includes("application/json")) {
  const result = await response.json();
  if (result.status === "success") {
    alert("Account created successfully!");
    document.getElementById("signupForm").reset();
  } else {
    alert("Error: " + result.message);
  }
} else {
  const text = await response.text();
  console.error("Unexpected response:", text);
  alert("Unexpected response from server.");
}


  } catch (error) {
    alert("Request failed: " + error.message);
    console.error(error);
  }
});
