import {ApplicationRef, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {PortalComponent, sharedTemplate} from "../../../assets/portal/portal.component";

@Component({
  selector: 'app-form-accordion-portal',
  template: sharedTemplate,
  styleUrls: ['./form-accordion-portal.component.scss']
})
export class FormAccordionPortalComponent extends PortalComponent {
  constructor(componentFactoryResolver: ComponentFactoryResolver,
              applicationRef: ApplicationRef,
              injector: Injector) {
    super(componentFactoryResolver, applicationRef, injector);
    this.targetDiv = 'form-accordion'
  }
}
