export function textAreaLimitWords(){
    let txtArea = document.querySelector('#comments')
    let selector = document.querySelector("#known-selection")
    let form = document.querySelector("#contact-form") 
    let oContact= new Array
    txtArea.addEventListener('keyup', calculateWords)
    selector.addEventListener('change', selectionMng)
    form.addEventListener('submit', formSubmision)
    const MAXLENGTH = 150
    document.getElementById("remaining-words").innerHTML = `Quedan ${MAXLENGTH} palabras.`

    function formSubmision(oEv){
        oEv.preventDefault()
        console.log("enviamos formulario")
        oContact.name = document.querySelector('#name').value
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#phone').value
        oContact.know = document.querySelector('#known-selection').value
        oContact.where = document.querySelector('#where').value
        oContact.comments = document.querySelector('#comments').value
        console.log(oContact)
    }

    function selectionMng(e){
        /* console.log(e)
        console.log(selector.value) */
        let field = document.querySelector("#where-meet")
        if (selector.value!="other"){
            field.classList.add('hide')
        }else{
            field.classList.remove('hide')
        }
    }

    function calculateWords(oEv){
        /* console.log('dentro de calculate words') */
        
        /* console.log(txtArea.value) */
        /* console.log(txtArea.value.slice(-1)) */
        let arrWords = txtArea.value.split(" ").removeEmptyItems()
        /* console.log(arrWords.length) */
        let remaining = MAXLENGTH - arrWords.length
        document.getElementById("remaining-words").innerHTML = `Quedan ${remaining} palabras.`
        if(txtArea.value.slice(-1)==" "){
            if (remaining<=0){
                txtArea.setAttribute('maxlength', txtArea.value.length)
            }else{
                txtArea.removeAttribute('maxlength')
            }
        }else{
            if (remaining>=0){
                txtArea.removeAttribute('maxlength')
            }else{
                txtArea.setAttribute('maxlength', txtArea.value.length)
            }
        }
        
       
    }
}

Array.prototype.removeEmptyItems = function(){
    let arrResult = new Array
    this.forEach(element => {
        /* console.log(element) */
        if (element!=""){
            arrResult.push(element)
        }
    });
    return arrResult
}

