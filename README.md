# Angular-GettingStarted

This is based on the PluralSight course "Angular: Getting Started" by Deborah Kurata [@deborahkurata](https://twitter.com/deborahkurata)

#### [Download Visual Studio Code](https://code.visualstudio.com/)

## Modules

### ES Modules (about the code)

* **Code** files that import or export something
* Organize our **code** files
* Modularize our **code**
* Promote **code** reuse

### Angular Modules (about the application)

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

### Decorator

* A function that adds **metadata** to a class, its members, or its method arguments. (selector, template, etc.)
* A JavaScript language feature that is implemented in TypeScript.
* Always prefixed with an `@` sign
  * @Component()
  * @Injectible()
  * @Input()
  * @Output()
  * @Pipe()

### Directive

* A custom HTML tag which is defined in the selector and rendered in an HTML file or template.
* A **Structural Directive** is a special Angular HTML attribute such as `*ngIf` or `*ngFor` which can manipulate the DOM based on the attribute text.  These are exposed by the BrowserModule.

### Binding

#### Event Binding

* Using parenthesis `( )`, events can be bound to component methods (*functions*).
* `<button (click)='toggleImage()'>`

#### Injector

* What Angular uses for dependency injection for objects that require services.

#### Interpolation

* Using the curly braces `{{ comp.value }}`, a component can set up a one-way (*readonly*) binding to its HTML template (view).

#### Property Binding

* Using the square brackets `[]`, an HTML element's attribute can be bound to a component's property.
* `<img [src]='comp.imageUrl'>`
* `[src]` is the binding **Target**
* `'comp.imageUrl'` is the binding **Source**

#### Two-Way Property Binding

* Using the square brackets **and** parenthesis `[()]`, an HTML element's attribute can be bound to a component's property.  The brackets signify the property being bound to the value, and the parenthesis represent the event binding back to the property to notify it has changed.
* `<input [(ngModel)]='listFilter'>`
* "Banana in a box"

### Guards

* A technique when routing to protect a route from access.
  * `CanActivate` - Guard navigation **to** a route.
  * `CanDeactivate` - Guard navigation **from** a route.
  * `Resolve` - Pre-fetch data before activating a route.
  * `CanLoad` - Prevent asynchronous routing.

### Pipes

* Using a pipe symbol `'|'`, bound properties can be formatted using built-in or custom pipes.
* Pipes can be chained together `{{ comp.price | currency | lowercase }}`
* Pipes may have paramters  `{{ comp.price | currency:'USD':'symbol':'1.2-2' }}`
* Use the `@Pipe({})` decorator to create custom pipes.

### Service

* A class with a focused purpose
* Used for features that:
  * Are independent from any particular component
  * Provide shared data or logic across components
  * Encapsulate external interactions

### Selector

* An attribute of a decorator which is a unique key for Angular to render this component when used in HTML.

## ES2015

* for...of - iterates over the objects in the list or array of objects.
* versus
* for...in - interates over the properties of an object (an array has indexes)

### Promise vs Observable

* Promise provides a single future value
  * Observable emits multiple values over time
* Promise is NOT lazy
  * Observable IS lazy
* Promise is NOT cancellable
  * Observable IS cancellable
* Observable supports map, filter, reduce and similar operators

### Observable Operator

* Each item is processed with the 'arrow' function **as** it is emitted.

## Command Line Interface (CLI)

* Install the CLI globally using the Node Package Manager (npm)
  * `npm install -g @angular/cli`
* Create a new angular project without routing and CSS type styles.
  * `ng new hello-world`
* Generate components, classes, services, guards, etc.
  * `ng g c welcome`
* Testing using the Karma Test Runner
  * `ng test`
  * `ng e2e`
* Building and deploying (by default the bundles go to the 'dist' folder.)
  * `ng build`
  * `ng build --prod` (minifies, uglifies, and hashes file names)

## Reference

https://www.typescriptlang.org/play/

Get the latest version of Node Package Manager: `npm install -g npm`

### [Latest Angular Modules](https://www.npmjs.com/~angular)

### More [PluralSight](https://pluralsight.com) Courses

* Angular: First Look
* Angular CLI
* Angular Reactive Forms
* Angular Routing
* Angular Component Communication
* Angular Fundamentals
* Unit Testing in Angular

### [Angular Documentation](http://angular.io)