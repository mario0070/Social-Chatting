var body = document.getElementById("body")

window.addEventListener("load", () => {
    setTimeout(() => {
        body.classList.add("valid")
    }, 100)
})


// Random Text
let typed = new Typed(".demo", {
    strings: ["Friends", "Family", "Flutter", ],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})


// toggleSideBar
var sideBar = document.getElementById("sideBar")
var toggleSideBar = document.getElementById("toggleSideBar")
var toggleSideBar1 = document.getElementById("toggleSideBar1")
var close1 = document.getElementById("close1")
var close2 = document.getElementById("close2")

toggleSideBar.addEventListener("click", () => {
    sideBar.classList.toggle("valid")
    signIn.classList.remove("valid")
})

toggleSideBar1.addEventListener("click", () => {
    sideBar.classList.toggle("valid")
    signIn.classList.remove("valid")
})

close1.addEventListener("click", () => {
    sideBar.classList.remove("valid")
})

close2.addEventListener("click", () => {
    signIn.classList.remove("valid")
})



// signIn Instead
var signIn = document.getElementById("signIn")
var signInsteadBtn = document.getElementById("signInsteadBtn")
signInsteadBtn.addEventListener("click", () => {
    sideBar.classList.remove("valid")
    signIn.classList.toggle("valid")
})


// contact Form Validation
function contactForm() {
    var CFname = document.getElementById("CFname")
    var CLname = document.getElementById("CLname")
    var CEmail = document.getElementById("CEmail")
    var CTel = document.getElementById("CTel")

    if (CFname.value.length < 3 || CLname.value.length < 3 || CEmail.value.length < 5 || CTel.value.length < 11) {
        alert("Please Enter Valid Detail")
    } else {
        alert(`We will get back to you soon Mr/Mrs ${CFname.value} ${CLname.value}`)
        CFname.value = ""
        CLname.value = ""
        CEmail.value = ""
        CTel.value = ""
    }
}

var signUpBtn = document.getElementById("signUpBtn")
var signUpForm = document.getElementById("signUpForm")
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault()
})

// Sign Up Validation
function signUpVal() {
    var SFname = document.getElementById("Sfname")
    var SLname = document.getElementById("SLname")
    var SEmail = document.getElementById("SEmail")
    var STel = document.getElementById("STel")
    var SPass1 = document.getElementById("SPass1")
    var SPass2 = document.getElementById("SPass2")
    var abs = document.getElementById("abs")

    if (SFname.value.length < 3) {
        SFname.classList.add("valid")
    } else {
        SFname.classList.remove("valid")
    }

    if (SLname.value.length < 3) {
        SLname.classList.add("valid")
    } else {
        SLname.classList.remove("valid")
    }

    if (SEmail.value.length < 5) {
        SEmail.classList.add("valid")
    } else {
        SEmail.classList.remove("valid")
    }

    if (STel.value.length < 11) {
        STel.classList.add("valid")
    } else {
        STel.classList.remove("valid")
    }

    if (SPass1.value.length < 6) {
        SPass1.classList.add("valid")
    } else {
        SPass1.classList.remove("valid")
    }

    if (SPass2.value.length < 6) {
        SPass2.classList.add("valid")
    } else {
        SPass2.classList.remove("valid")
    }

    if (SPass1.value != SPass2.value) {
        SPass2.classList.add("valid")
        alert("password does not match")
    } else {
        SPass2.classList.remove("valid")

    }

    if (SFname.value.length < 3 || SLname.value.length < 3 || SEmail.value.length < 5 || STel.value.length < 11 || SPass1.value.length < 6 || SPass1.value != SPass2.value) {
        alert("Please fill in a valid details")
    } else {
        abs.classList.add("valid")
        setTimeout(() => {
            abs.classList.remove("valid")
            SFname.value = ""
            SLname.value = ""
            SEmail.value = ""
            STel.value = ""
            SPass1.value = ""
            SPass2.value = ""
            sideBar.classList.remove("valid")
        },4000)


    }
}



// Sign In Vaidation
function signInVal(){
    var email = document.getElementById("email")
    var pass = document.getElementById("pass")
    var abs = document.getElementById("abs1")
    
    if (pass.value.length < 6 ) {
        pass.classList.add("valid")
    } 
    else {
        pass.classList.remove("valid")

    }

    if (email.value.length < 5) {
        email.classList.add("valid")
    } else {
        email.classList.remove("valid")

    }

    if(pass.value.length < 6 || email.value.length < 5){
        abs.classList.remove("valid")
    }
    else{
        abs.classList.add("valid")
        setTimeout(() => {
            abs.classList.remove("valid")
            email.value = ""
            pass.value = ""
            signIn.classList.remove("valid")
            setTimeout(()=>{
                alert("yeah")
            },4000)
        },4000)
    }
}