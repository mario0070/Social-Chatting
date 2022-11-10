
var body = document.getElementById("body")

window.addEventListener("load",()=>{
    setTimeout(()=>{
        body.classList.add("valid")
    },100)
})


// Random Text
let typed = new Typed(".demo", {
    strings: ["Friends", "Family","Flutter",],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
  })


// toggleSideBar
var sideBar= document.getElementById("sideBar")
var toggleSideBar= document.getElementById("toggleSideBar")
var toggleSideBar1= document.getElementById("toggleSideBar1")
var close1 = document.getElementById("close1")
var close2 = document.getElementById("close2")

toggleSideBar.addEventListener("click",()=>{
    sideBar.classList.toggle("valid")
    signIn.classList.remove("valid")
})

toggleSideBar1.addEventListener("click",()=>{
    sideBar.classList.toggle("valid")
    signIn.classList.remove("valid")
})

close1.addEventListener("click",()=>{
    sideBar.classList.remove("valid")
})

close2.addEventListener("click",()=>{
    signIn.classList.remove("valid")
})



// signIn Instead
var signIn=document.getElementById("signIn")
var signInsteadBtn=document.getElementById("signInsteadBtn")
signInsteadBtn.addEventListener("click",()=>{
    sideBar.classList.remove("valid")
    signIn.classList.toggle("valid")
})


// contact Form Validation
function contactForm(){
    var CFname = document.getElementById("CFname")
    var CLname = document.getElementById("CLname")
    var CEmail = document.getElementById("CEmail")
    var CTel = document.getElementById("CTel")

    // if(CFname.value == "" || CLname.value == "" ){
    //     alert("Please Enter Valid Detail")
    // }
    if(CEmail.value != " "){
        alert("Please Enter Valid Detail")
    }
    else{
        alert(`We will get back to you soon Mr/Mrs ${CFname.value} ${CLname.value}`)
        // CFname.value = ""
    }
}