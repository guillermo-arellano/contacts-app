import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <article class="template animated slideInRight">
      <h4>Page Not Found</h4>
      <div>There is no page or template matching the address.</div>
    </article>
  `
})
export class PageNotFoundComponent { }
