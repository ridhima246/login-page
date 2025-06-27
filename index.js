document.getElementById("loginButton").onclick = function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let msg1 = document.getElementById("message1");
  let msg2 = document.getElementById("message2");

  if (username === "" || password === "") {
    msg1.style.color = "red";
    msg1.textContent = "Please enter both username and password.";
    msg2.textContent = "";
  } else {
    msg1.style.color = "green";
    msg1.textContent = "Welcome, " + username + "!";
    msg2.style.color = "gray";
    msg2.textContent = "You’ve successfully logged in (pretend).";
  }
}
