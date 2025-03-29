// async function loginUser() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Sending login request to backend
//     const response = await fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//         alert('Login successful! Redirecting to dashboard...');
//         window.location.href = 'alumni-portal/dashboard/alumini-dashboard.html';  // Redirect
//     } else {
//         alert(data.error); // Show error message
//     }
// }
