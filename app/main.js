// import ValuesController from "./Controllers/ValuesController.js";
import { CategoriesController } from "./Controllers/CategoriesController.js";


class App {
  categoriesController = new CategoriesController();
}

window["app"] = new App();
