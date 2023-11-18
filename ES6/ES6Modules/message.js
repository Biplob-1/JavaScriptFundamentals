// Import name, age exports from the file person.js
import{ name , age} from "./person";
import { x, y } from "./person";

// Default Exports
const message = ()=>{

     name ="Biplob";
     age =27;
    return name + " is " + age + " years old."; 
};
export default message;

