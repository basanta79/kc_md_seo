export function mngMenu(){
    
    console.log('hola mundo ddd')
    let oMenuButton = document.querySelector('#btnMenu')
    let oMenuSelection = document.querySelector('#btnSelection')
    
    oMenuButton.addEventListener('click', toogleMenuMobile)
    oMenuSelection.addEventListener('click', toogleMenuMobile)
    
    /* arrMenu[1].addEventListener('click', scrollToSection) */

    function toogleMenuMobile(oEvent){
        /* console.log('has hecho click en boton') */
        let oMenuMobile = document.querySelector('.nav-dropdown')
        /* console.log(oMenuMobile) */
        oMenuMobile.classList.toggle('hide')

    }
}

export function spyScroll(){
    let aSections = []
    let aMenu = document.querySelectorAll(".nav-left li")
    let amMenu = document.querySelectorAll(".nav-dropdown li")
    let oSections = new Array
    let oSectionsSorted = new Array
    let arrMenu = document.querySelectorAll('.mnu-btn')
    /* console.log(arrMenu) */
    /* sectionArrayBuilder() */
    window.addEventListener('resize', calculateNewOffsets)
    window.addEventListener('scroll', changeMenu)
    arrMenu.forEach(element =>{
        element.addEventListener('click',scrollToSection2)
    })
    sectionArrayBuilder();

    function calculateNewOffsets(){
        /* console.log("nuevos offsets") */
        sectionArrayBuilder()
    }

    function scrollToSection(oEv){
        sectionArrayBuilder();
        let desiredOffset =0
        /* console.log("scrolltosection:") */
        /* console.log(oEv) */
        /* console.log(oEv.srcElement.id) */
        /* window.scroll(0,1000) */
        /* document.querySelector("#formulario").scrollIntoView({behaviour: 'smooth'}) */
        /* document.scrollTop=0 */
        let strNameTemp = oEv.srcElement.id.split('-')
        console.log(strNameTemp[1])
        oSectionsSorted.forEach(element => {
            if (element.id == strNameTemp[1]){
                desiredOffset = element.offset
            }
        })
        
        console.log("queremos ir a la section "+desiredOffset)
        let index = window.pageYOffset;
        console.log("Estamos en: " + index)
        if (index<desiredOffset){
            for (index =  0; index < desiredOffset; index++) {
                /* window.scrollTo(0, index)
                console.log(index) */
                setTimeout(function(){
                    window.scrollTo(0, index) 
                    console.log(index)
                },500)
                console.log(index)
            }
        }else{
            for (index =  window.pageYOffset; index > desiredOffset; index--) {
                setTimeout(function(){
                    window.scrollTo(0, index)
                },500)
            }
        }
        
        /* window.scroll(0, desiredOffset) */
        console.log ("coordenadas finales: " + window.pageYOffset)
    }


    function scrollToSection2(oEv){
        sectionArrayBuilder();
        let desiredOffset =0
        let strNameTemp = oEv.srcElement.id.split('-')
        console.log(strNameTemp[1])
        oSectionsSorted.forEach(element => {
            if (element.id == strNameTemp[1]){
                desiredOffset = element.offset
            }
        })
        console.log("queremos ir a la section "+desiredOffset)
        let index = window.pageYOffset;
        console.log("Estamos en: " + index)

        if (desiredOffset-index>0){
            var id = setInterval(moveScrollDown,1)
        }else{
            var id = setInterval(moveScrollUp,1)
        }

        function moveScrollUp(){
            let index = window.pageYOffset;
            if ((index-10) <= desiredOffset){
                clearInterval(id)
            }else{
                index-=10;
                window.scrollTo(0, index)
                /* console.log(index) */
            }
            /* console.log("scrollUp") */
        }

        function moveScrollDown(){
            let index = window.pageYOffset;
            if ((index) >= desiredOffset){
                clearInterval(id)
            }else{
                index+=10;
                window.scrollTo(0, index)
                /* console.log(index) */
            }
        }

    }
    
    function sectionArrayBuilder(){
        aSections = document.querySelectorAll(".anchor")
        /* oSections.push({"id":"Home", "offset": 0}) */
        oSections=[]
        aSections.forEach( element => {
          /*  console.log(element.id + element.offsetTop) */
           oSections.push({"id":element.id, "offset": element.offsetTop})
        })
        oSectionsSorted = oSections.sort(function(a,b){
            return a['offset']-b['offset']
        })
        /* console.log(oSectionsSorted) */
        oSectionsSorted.forEach( element =>{
           /*  console.log(element.id + element.offset) */

        })
    }

    function changeMenu(){
        let pageOffset = window.pageYOffset + 2
        let actualSection
        /* console.log(pageOffset) */
        oSectionsSorted.forEach(element =>{
            if (pageOffset>=element.offset){
                /* console.log(`estoy en ${element.id}`) */
                actualSection=element.id
            }
        })
        /* console.log(actualSection) */
        aMenu.forEach(element =>{
            /* console.log(element.id) */
            if (element.id == "mnu-" + actualSection){
                element.classList.add('active')
            }else{
                element.classList.remove('active')
            }
        })

        amMenu.forEach(element =>{
            /* console.log(element.id) */
            if (element.id == "mnum-" + actualSection){
                element.classList.add('active')
            }else{
                element.classList.remove('active')
            }
        })


    }
    
    
    
}