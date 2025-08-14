const userList = document.getElementById("user-list");
const errorMsg = document.getElementById("error");

// Function to fetch and display users
async function fetchUsers() {
  try {
    errorMsg.textContent = ""; // clear old errors
    userList.innerHTML = "<p>Loading...</p>";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data. Status: " + response.status);
    }

    const users = await response.json();

    userList.innerHTML = ""; // clear loading message

    users.forEach(user => {
      const div = document.createElement("div");
      div.classList.add("user-card");
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Address:</b> ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(div);
    });
  } catch (error) {
    errorMsg.textContent = "Error: " + error.message;
  }
}

// Load users when page starts
fetchUsers();
