import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {CdkPortal, DomPortalHost} from "@angular/cdk/portal";

export const sharedTemplate = `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
`
@Component({
  template: sharedTemplate
})
@Injectable()
export abstract class PortalComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal) portal: CdkPortal | undefined;
  private host: DomPortalHost | undefined;
  targetDiv: string = '';

  protected constructor(private componentFactoryResolver: ComponentFactoryResolver,
                        private applicationRef: ApplicationRef,
                        private injector: Injector) {}
  ngAfterViewInit() {
    const creatorDiv = document.querySelector(`#${this.targetDiv}`)!
    this.host = new DomPortalHost(
      creatorDiv,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    )
    this.host.attach(this.portal)
  }
  ngOnDestroy() {
    this.host?.detach()
  }
}
