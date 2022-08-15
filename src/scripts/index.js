

function showNav(){
    let navLinks = document.querySelectorAll(".link")

    navLinks.forEach((link)=>{
        if(link.className === "link hidden sm:inline-block p-2 text-center"){  
            link.className = "link block sm:inline-block p-2 text-center"
        }
        else{    
            link.className = "link hidden sm:inline-block p-2 text-center"
        }
    });
}