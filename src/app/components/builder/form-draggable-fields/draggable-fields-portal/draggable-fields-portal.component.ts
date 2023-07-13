import {ApplicationRef, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {PortalComponent, sharedTemplate} from "../../../assets/portal/portal.component";

@Component({
  selector: 'app-draggable-fields-portal',
  template: sharedTemplate,
  styleUrls: ['./draggable-fields-portal.component.scss']
})

export class DraggableFieldsPortalComponent extends PortalComponent{
  constructor(componentFactoryResolver: ComponentFactoryResolver,
              applicationRef: ApplicationRef,
              injector: Injector) {
    super(componentFactoryResolver, applicationRef, injector);
    this.targetDiv = 'draggable-fields'
  }
}
