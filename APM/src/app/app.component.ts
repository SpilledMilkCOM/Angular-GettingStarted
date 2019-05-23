import { Component } from "@angular/core";

// This using an inline template versus a linked template (html is referenced in a different file)

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}