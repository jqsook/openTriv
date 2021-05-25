import { ProxyState } from "../AppState.js"
import { Category }  from "../Models/Category.js"

class OpenTrivService {
    async getCategorie(url) {
        let res = await fetch(url)
        let data = await res.json()
        ProxyState.Category = new Category(data)
    }

    async getCategories() {
        let res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        let data = await res.json()
        ProxyState.categories = data.results.map(c => new Category(c))
    }



}
export const openTrivService = new OpenTrivService()