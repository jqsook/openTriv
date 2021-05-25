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
        <p><b>${this.category}</b> ${this.question}</p>
         <button>${this.correct}</button>
         
         </div>
         
         `
         
        }
        
        //Make a template += for the incorrect answers???
        // <button>${this.incorrect}</button>
}

//  <p>${this.incorrect_answer[1]}</p>
//         <p>${this.incorrect_answer[2]}</p>

//ORRR do i set a index array here and then assign incorrect answers to it?
