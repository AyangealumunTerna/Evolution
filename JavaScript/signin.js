 // Navs sign in and sign up functions
   
    function showSignIn(event) {
      if(event) event.preventDefault();
        hideAllSections();
        document.getElementById("signInSection").classList.remove("d-none");
        document.getElementById("signInSection").classList.add("fade-in");
    }

    function showSignUp(event) {
      if(event) event.preventDefault();
        hideAllSections();
        document.getElementById("signUpSection").classList.remove("d-none");
        document.getElementById("signUpSection").classList.add("fade-in");
    }

    function showDashboard(event) {
      if(event) event.preventDefault();
        hideAllSections();
        document.getElementById("dashboardSection").classList.remove("d-none");
        document.getElementById("dashboardSection").classList.add("fade-in");
    }

    function hideAllSections() {
        const sections = document.querySelectorAll(".section");
        sections.forEach(section => {
            section.classList.add("d-none");
            section.classList.remove("fade-in");
        });
    }