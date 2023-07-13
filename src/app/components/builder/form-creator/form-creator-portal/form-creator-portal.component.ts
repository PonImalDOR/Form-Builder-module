import {ApplicationRef, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {PortalComponent, sharedTemplate} from "../../../assets/portal/portal.component";

@Component({
  selector: 'app-form-creator-portal',
  template: sharedTemplate,
  styleUrls: ['./form-creator-portal.component.scss']
})

export class FormCreatorPortalComponent extends PortalComponent {
  constructor(componentFactoryResolver: ComponentFactoryResolver,
              applicationRef: ApplicationRef,
              injector: Injector) {
    super(componentFactoryResolver, applicationRef, injector);
    this.targetDiv = 'form-creator'
  }
}
