import { mngMenu } from './menu.js'
import { spyScroll } from './menu.js'
import { textAreaLimitWords } from './form.js'

function app(){
    mngMenu()
    spyScroll()
    textAreaLimitWords()
}

document.addEventListener('DOMContentLoaded', app)