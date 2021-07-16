import { CommonModule } from '@angular/common';
import {
    AfterViewInit, Compiler, Component, ComponentRef, Injector, NgModule, NgModuleRef, OnDestroy,
    ViewChild, ViewContainerRef, ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

import { data2Test } from './data2';

@Component({
  selector: 'app-test',
  template: ` <div #container></div> `,
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements AfterViewInit {
  constructor(private compiler: Compiler, private sanitizer: DomSanitizer) {
    this.resetComponent();
  }

  @ViewChild('container', { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  isViewInit = false;

  ngAfterViewInit() {
    this.isViewInit = true;
    this.resetComponent();
  }

  resetComponent() {
    if (this.isViewInit) {
      let self = this;

      this.container.remove();
      // Must clear cache.
      this.compiler.clearCache();
      // Define the component using Component decorator.

      const sanitizedContent = DOMPurify.sanitize(data2Test.html);
     const html =  this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);

      const component = Component({
        template: `${html}`,
        styles: [data2Test.style],
      })(
        class {
          data = data2Test.data2;
        }
      );

      // Define the module using NgModule decorator.
      const module = NgModule({
        declarations: [component],
        imports: [CommonModule],
      })(class {});

      // Asynchronously (recommended) compile the module and the component.
      this.compiler
        .compileModuleAndAllComponentsAsync(module)
        .then((factories) => {
          // Get the component factory.
          const componentFactory = factories.componentFactories[0];
          // Create the component and add to the view.
          const componentRef = this.container.createComponent(componentFactory);
          // Modifying the property and triggering change detection.
          // componentRef.instance.data = null;
        });
    }
  }
}
