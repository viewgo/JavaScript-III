/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window = default binding. The context is the window/browser. this points to window when this doesn't point to another object.

* 2. Implicit = Occurs with dot notation. this will refer to the object that is left of the dot.

* 3. New = Used in constructors and this becomes the new object created.

* 4. Explicit = Directly passing this to a function inside of a .call(), .apply(), or .bind(). this is whatever was passed inside parenthesis.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
var windowBinding = function(){
    console.log(this);    
}
// windowBinding();


// Principle 2
// code example for Implicit Binding
let implicitBinding = {
    name: "Implicit Binding",
    doStuff: function(){
        console.log(this.name);
    }
}
// implicitBinding.doStuff();


// Principle 3
// code example for New Binding
function newBinding(binding) {
    this.greeting = 'I am a New Binding';
    this.binding = binding;
    this.talk = function() {
        console.log(`${this.greeting} + ${this.greeter}`);
        console.log(this);
    };
  }  
  const binding1 = new newBinding('New Binding 1');
//   binding1.talk();


// Principle 4
// code example for Explicit Binding
function whoAmI(){
    console.log(this.name);
}
let explicitBinding = {
    name: 'Explicit Binding'
}
// whoAmI.call(explicitBinding);