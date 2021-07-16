import { CommonModule } from '@angular/common';
import {
    AfterViewInit, Compiler, Component, ComponentRef, Injector, NgModule, NgModuleRef, OnDestroy,
    ViewChild, ViewContainerRef, ViewEncapsulation
} from '@angular/core';

import { myData } from './data';

@Component({
  selector: 'app-test',
  template: ` <div #container></div> `,
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements AfterViewInit {
  constructor(private compiler: Compiler) {
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
      const component = Component({
        template: `<h1>Hello Hello</h1>${myData.html}`,
        styles: [myData.style],
      })(
        class {
          data = myData.data;
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
