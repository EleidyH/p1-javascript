function showCookieModal() {
    document.getElementById('cookie-modal').style.display = 'block';
  }
  
  function checkAge() {
    var age = document.getElementById('age-input').value;
  
    if (age && parseInt(age) >= 18) {
      window.location.href = 'https://www.jouwwebsite.nl'; // Vervang dit met je gewenste website.
    } else {
      document.getElementById('error-message').innerText = 'Helaas, je bent te jong.';
    }
  }
  