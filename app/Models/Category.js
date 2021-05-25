export class Category{
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.question = data.question
        this.correct = data.correct_answer
        this.incorrect = data.incorrect_answer
        this.url = data.url
    }


    get listTemplate() {
        return `
        <div>
        <p><b>${this.category}</b> Heres Your Question 
         ${this.question}</p>
        <button>${this.incorrect}</button>
        <button>${this.correct}</button>

        </div>
        
        `
        
}


}

//  <p>${this.incorrect_answer[1]}</p>
//         <p>${this.incorrect_answer[2]}</p>


