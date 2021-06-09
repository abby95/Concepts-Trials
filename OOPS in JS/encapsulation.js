/* ::::::: ENCAPSULATION THEORY ::::::

A class has certain properties that you dont want to be accessed  from outside the class.

These Properties are "PRIVATE" to this class and are not accessible from Outside the Class.

The only way to access these PRIVATE properties is through setters and getter access methods that you define in the class

This is called Encapsulation

*/

// CODE EXAMPLE:::

class Employee {
    name

    set name(name) {
        if (name && name.length === 0) {
            console.log("Empty String Received.. Please Provide Name");
            return
        }
        this.name = name

    }

    get name() {
        return this.name
    }

}

var abby = new Employee()

// Triggers Setter Method
abby.name = ""

// Triggers Getter Method
console.log(abby.name)