const number = document.getElementById("number");
    const welcome_text = document.getElementById("welcome_text");
    const i_starnet = document.getElementById("i_starnet");
    const Welcome_to = document.getElementById("Welcome_to");
    const btn_get_otp = document.getElementById("btn_get_otp");
    const input_sec = document.getElementById("input_sec");
    const Terms = document.getElementById("Terms");
    const login_page = document.getElementById("login_page");
    const your_compony_logo = document.getElementById("your_compony_logo");
    const submitButton = document.getElementById("submitButton");

    const input_sec2 = document.getElementById("input_sec2");
    const your_compony_logo2 = document.getElementById("your_compony_logo2");
   

    number.addEventListener("click", function () {
        welcome_text.style.display = "flex";
        Welcome_to.style.fontSize = "1.2rem";
        Welcome_to.style.marginRight = "0.8rem";
        i_starnet.style.height = "2rem";
        i_starnet.classList.add("i_starnet_css");
        btn_get_otp.style.background = "#007bff";
        submitButton.style.background = "#007bff";
        input_sec.style.height = "50%";
        input_sec.style.top = "15%";
        Terms.style.visibility = "hidden";
        login_page.style.height = "300px";
        your_compony_logo.style.marginTop = "1vh";
        your_compony_logo.style.marginBottom = "1vh";
        
    });

    btn_get_otp.addEventListener("click", function () {
        input_sec.style.visibility = "hidden";
        input_sec2.style.visibility = "visible";
        input_sec2.style.height = "50%";
        input_sec2.style.top = "15%";
        your_compony_logo2.style.marginTop = "1vh";
        your_compony_logo2.style.marginBottom = "1vh";
        

    });