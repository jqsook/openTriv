import { ProxyState } from "../AppState.js"
import { openTrivService } from "../Services/OpenTrivService.js"

function drawCategories() {
    let template = ''
    ProxyState.categories.forEach(category => template += category.listTemplate)
    document.getElementById('app').innerHTML = template
}



export class CategoriesController{
    constructor() {
        ProxyState.on('categories', drawCategories)
        drawCategories()
        
    }


    getCategories() {
        try {
        openTrivService.getCategories()
        } catch (error) {
            alert(error.message)
    }
}
    getCategory(url) {
        try {
            openTrivService.getStarship(url)
        } catch (e) {
            alert(e.message)
        }
    }


}

// function mudInc() {
//     let inc = ProxyState.category.
//     ProxyState.items.forEach(i => template += i.Template)
//     document.getElementById('items').innerHTML = template
// }