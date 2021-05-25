export class Category {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.question = data.question
        this.correct = data.correct_answer
        this.incorrect = data.incorrect_answers
        this.url = data.url
    }


    get listTemplate() {
        return `
        <div>
        <p><b>${this.category}</b> ${this.question}</p>
    <button>${this.correct}</button>
    ${this.incorrectAns()}

         </div>
         
         `
         
    }

    incorrectAns() {
        console.log(this.incorrect)
        let template = ''
        this.incorrect.forEach(i => {
            template += `
            <button>${i}</button>
            `
        })
    
        return template
    }
    
}




