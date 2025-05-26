 const form = document.getElementById('signupForm');
  const apiURL = 'YOUR_WEB_APP_URL_HERE';   

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simple client-side validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const education = form.education.value.trim();
    const password = form.password.value.trim();

    if (!name || !email || !phone || !education || !password) {
      alert('Please fill all fields!');
      return;
    }

    
    const data = { name, email, phone, education, password };

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();

      if (result.status === 'success') {
        alert('Account created successfully!');
        form.reset();
      } else {
        alert('Error: ' + result.message);
      }

    } catch (error) {
      alert('Request failed: ' + error.message);
    }
  });