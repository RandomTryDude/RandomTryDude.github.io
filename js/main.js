
  function setDarkModePreference(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      localStorage.setItem('preference', 'DarkMode');
    } else {
      localStorage.setItem('preference', 'LightMode');
    }
  }

  function getDarkModePreference() {
    return localStorage.getItem('preference');
  }

  function Darkmode() {
    var element = document.body;
    var checkbox = document.getElementById("toggle_checkbox");

    // Check if dark mode is enabled in localStorage
    var darkModePreference = getDarkModePreference();
    if (darkModePreference === 'DarkMode') {
      element.classList.add('dark-mode');
      checkbox.checked = true;
    }
  }

  function ColorMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Save the dark mode state in localStorage
    var isDarkModeEnabled = element.classList.contains("dark-mode");
    setDarkModePreference(isDarkModeEnabled);
  }

