const btnTete= document.getElementById("tete");
const main = document.getElementById("main")
const Ssection1 = document.getElementById("Ssection1");
const section2= document.getElementById("section2");

//Animation Stack Logos //

const stack = document.getElementById("stack");
const btncss = document.getElementById("css");
const btnhtml = document.getElementById("html");
const btnjs = document.getElementById("js");
const btnphp = document.getElementById("php");
const figma = document.getElementById("figma");
const adobe = document.getElementById("adobe");
const visual = document.getElementById("visual");
const react = document.getElementById("react");
const node = document.getElementById("node");
const closeStack = document.getElementById("close-stack");
const displayStack = document.getElementById("display-stack");

btncss.style.display="none";
btnhtml.style.display="none";
btnjs.style.display="none";
btnphp.style.display="none";
figma.style.display="none";
adobe.style.display="none";
visual.style.display="none";
react.style.display='none';
node.style.display='none';


stack.addEventListener("click",()=>{
   stack.classList.add("stack-no-bounce");
   stack.classList.remove("stack");
   cyrilinfos.style.display="none"
   contactSection.style.display="none"
   displayStack.classList.add("display-stack-no-bounce");
   displayStack.classList.remove("display-stack");
    setTimeout(() =>{
        btnphp.style.display="";
        btnphp.classList.add("animation-stack");
       }, 0)


    setTimeout(() =>{
    btnjs.style.display="";
    btnjs.classList.add("animation-stack");
       },250)

    setTimeout(() =>{
    btncss.style.display="";
    btncss.classList.add("animation-stack");
   }, 500)

   setTimeout(() =>{
    btnhtml.style.display="";
    btnhtml.classList.add("animation-stack");
   }, 750)

   setTimeout(() =>{
      react.style.display="";
      react.classList.add("animation-stack");
     }, 1000)

   setTimeout(() =>{
    figma.style.display="";
    figma.classList.add("animation-stack");
   }, 1000)

   setTimeout(() =>{
      node.style.display="";
      node.classList.add("animation-stack");
     }, 1250)

   setTimeout(() =>{
    adobe.style.display="";
    adobe.classList.add("animation-stack");
   }, 1250)


   setTimeout(() =>{
    visual.style.display="";
    visual.classList.add("animation-stack");
   }, 1500)


})


//Animation Tableau //

const btnsocial = document.getElementById("social")
const tableau =document.getElementById("tableau")

tableau.addEventListener("mouseenter",()=>{
    btnsocial.classList.add("socialAnim")
})




//Animation Scroll Switch Room //
const section1 = document.getElementById("section1");
section2.style.display="none";
const back = document.getElementById("back")
const btnPortfolio = document.getElementById("portfolio-btn")
const btnAccueil = document.getElementById("accueil-btn")

Ssection1.addEventListener("click",()=>{
   section2.style.display="";
    main.classList.toggle("scrollDown")
    main.classList.remove("scrollUp")
    btnInformation.style.display="none";

})
back.addEventListener("click",()=>{
   main.classList.toggle("scrollDown")
   main.classList.toggle("scrollUp")
   btnInformation.style.display="";

})
btnPortfolio.addEventListener("click",()=>{
   section2.style.display="";
    main.classList.toggle("scrollDown")
    main.classList.remove("scrollUp")
    btnInformation.style.display="none";
    hideBurger()
})
btnAccueil.addEventListener("click",()=>{
   main.classList.toggle("scrollDown")
   main.classList.toggle("scrollUp")
   btnInformation.style.display="";
   hideBurger()


})


// Helper //
const btnInformation = document.getElementById("informations");
const screenAide = document.getElementById("aide");

screenAide.style.display="none";

btnInformation.addEventListener('mouseover',()=>{
   screenAide.style.display="";

})
btnInformation.addEventListener('mouseleave',()=>{
   screenAide.style.display="none";

})

// Animation avatar//
const avatar = document.getElementById("avatar-cyril");
const cyrilinfos = document.getElementById("cyril-infos");
const btnclose = document.getElementById("close-infos")
const btnechange = document.getElementById("btn-echange")
const btnQui = document.getElementById("quisuis-btn")
cyrilinfos.style.display="none";

avatar.addEventListener("click",()=>{
   event.preventDefault()
   cyrilinfos.style.display="";
   btncss.style.display="none";
   btnhtml.style.display="none";
   btnjs.style.display="none";
   btnphp.style.display="none";
   figma.style.display="none";
   adobe.style.display="none";
   visual.style.display="none";
   react.style.display='none';
   node.style.display='none';
      contactSection.style.display="none"
   
})
btnQui.addEventListener("click",()=>{
   event.preventDefault()
   main.classList.remove("scrollDown")
   cyrilinfos.style.display="";
   btncss.style.display="none";
   btnhtml.style.display="none";
   btnjs.style.display="none";
   btnphp.style.display="none";
   figma.style.display="none";
   adobe.style.display="none";
   visual.style.display="none";
   react.style.display='none';
   node.style.display='none';
   contactSection.style.display="none"
   hideBurger()

   
})
btnechange.addEventListener("click",()=>{
   cyrilinfos.style.display="none";
   contactSection.style.display="";
})

btnclose.addEventListener("click",()=>{
   cyrilinfos.style.display="none";
   
})


// Mode sombre //
const interrupteur = document.getElementById("interrupteur");
const Ssection2 = document.getElementById("Ssection2");

interrupteur.addEventListener("click",()=>{
   main.classList.toggle("main");
   main.classList.toggle("main-nuit")
   Ssection2.classList.toggle("Ssection2-nuit")
   section2.classList.toggle("section2-nuit")
   
})


// Formulaire de contact //
const btnContact = document.getElementById("contact-btn");
const imgMail = document.getElementById("img-mail");
const imgPhone = document.getElementById("img-phone");
const form = document.getElementById("form");
const btnCloseContact = document.getElementById("close-contact")
const contactSection = document.getElementById("contact")
form.style.display="none";
contactSection.style.display="none"
const votremail = document.getElementById("votremail");
const votresujet = document.getElementById("votresujet");
const votretexte = document.getElementById("votretexte");
const submitcontact = document.getElementById("submitcontact");
const logocontact = document.getElementById("logo-contact")

votremail.style.display="none";
votresujet.style.display="none";
votretexte.style.display="none";
submitcontact.style.display="none";

logocontact.addEventListener("click",()=>{
   contactSection.style.display="";
   cyrilinfos.style.display="none";
   btncss.style.display="none";
   btnhtml.style.display="none";
   btnjs.style.display="none";
   btnphp.style.display="none";
   figma.style.display="none";
   adobe.style.display="none";
   visual.style.display="none";
   react.style.display='none';
   node.style.display='none';

})



btnContact.addEventListener("click",()=>{
   contactSection.style.display="";
   cyrilinfos.style.display="none";
   btncss.style.display="none";
   btnhtml.style.display="none";
   btnjs.style.display="none";
   btnphp.style.display="none";
   figma.style.display="none";
   adobe.style.display="none";
   visual.style.display="none";
   react.style.display='none';
   node.style.display='none';
   hideBurger()
})

imgMail.addEventListener("click",()=>{
   contactSection.classList.add("contact2")
   form.style.display='';
   imgMail.style.display="none";
   imgPhone.style.display="none";
   setTimeout(()=>{
      votremail.style.display="";
      votremail.classList.add("input-bouncing");
   },0)
   setTimeout(()=>{
      votresujet.style.display="";
      votresujet.classList.add("input-bouncing");
   },500)
   setTimeout(()=>{
      votretexte.style.display="";
      votretexte.classList.add("input-bouncing");
   },1000)
   setTimeout(()=>{
      submitcontact.style.display="";
      submitcontact.classList.add("input-bouncing");
   },1500)


})

btnCloseContact.addEventListener("click",()=>{
contactSection.style.display='none'
})

//Welcome

const btnwelcome = document.getElementById("letsgo");
const btnwelcomePhone = document.getElementById("letsgo2");
const welcomeSectionPhone = document.getElementById("welcome-phone");

const welcomeSection = document.getElementById("welcome");
welcomeSection.style.display="none";
welcomeSectionPhone.style.display="none";

setTimeout(()=>{
   welcomeSection.style.display=""
   welcomeSectionPhone.style.display="";

},1000)
btnwelcome.addEventListener("click",()=>{
welcomeSection.style.display='none'
})
btnwelcomePhone.addEventListener("click",()=>{
   welcomeSectionPhone.style.display='none'
   })


   // Menu Burger Mobile //

   const menuBurger = document.getElementById("menu-burger");
   const listMenu = document.getElementById("liste-menu");
   menuBurger.addEventListener("click",()=>{
      hideBurger()




   })

   function hideBurger(){
      btnAccueil.classList.toggle("anim-burger")
      btnContact.classList.toggle("anim-burger")
      btnPortfolio.classList.toggle("anim-burger")
      btnInformation.classList.toggle("anim-burger")
      btnQui.classList.toggle("anim-burger")
   };