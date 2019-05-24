# Angular-GettingStarted
This is based on the PluralSight course "Angular: Getting Started" by Deborah Kurata [@deborahkurata](https://twitter.com/deborahkurata)

#### [Download Visual Studio Code](https://code.visualstudio.com/)

## Modules

#### ES Modules (about the code)
* **Code** files that import or export something
* Organize our **code** files
* Modularize our **code**
* Promote **code** reuse

#### Angular Modules (about the application)
* Code files that organize the **application** into cohesive blocks of functionality
* Organize our **application**
* Modularize our **application**
* Promote **application** boundaries


## Lifecycle Hooks
* `OnInit`: Perform component initialization, retrieve data
* `OnChanges`: Perform action after change to input properties
* `OnDestroy`: Perform cleanup
* [There are others...](https://angular.io/guide/lifecycle-hooks)


## Vocabulary
#### Decorator
* A function that adds **metadata** to a class, its members, or its method arguments. (selector, template, etc.)
* A JavaScript language feature that is implemented in TypeScript.
* Always prefixed with an `@` sign
    * @Component()
    * @Input()
    * @Output()
    * @Pipe()

#### Directive
* A custom HTML tag which is defined in the selector and rendered in an HTML file or template.
* A **Structural Directive** is a special Angular HTML attribute such as `*ngIf` or `*ngFor` which can manipulate the DOM based on the attribute text.  These are exposed by the BrowserModule.

#### Binding

##### Event Binding
* Using parenthesis `( )`, events can be bound to component methods (*functions*).
* `<button (click)='toggleImage()'>`

##### Interpolation
* Using the curly braces `{{ comp.value }}`, a component can set up a one-way (*readonly*) binding to its HTML template (view).

##### Property Binding
* Using the square brackets `[]`, an HTML element's attribute can be bound to a component's property.
* `<img [src]='comp.imageUrl'>`
* `[src]` is the binding **Target**
* `'comp.imageUrl'` is the binding **Source**

##### Two-Way Property Binding
* Using the square brackets **and** parenthesis `[()]`, an HTML element's attribute can be bound to a component's property.  The brackets signify the property being bound to the value, and the parenthesis represent the event binding back to the property to notify it has changed.
* `<input [(ngModel)]='listFilter'>`
* "Banana in a box"

#### Pipes
* Using a pipe symbol `'|'`, bound properties can be formatted using built-in or custom pipes.
* Pipes can be chained together `{{ comp.price | currency | lowercase }}`
* Pipes may have paramters  `{{ comp.price | currency:'USD':'symbol':'1.2-2' }}`
* Use the `@Pipe({})` decorator to create custom pipes.

#### Selector
* An attribute of a decorator which is a unique key for Angular to render this component when used in HTML.

## ES2015
* for...of - iterates over the objects in the list or array of objects.
* versus
* for...in - interates over the properties of an object (an array has indexes)


## Reference
https://www.typescriptlang.org/play/

Get the latest version of Node Package Manager: `npm install -g npm`

#### [Latest Angular Modules](https://www.npmjs.com/~angular)
