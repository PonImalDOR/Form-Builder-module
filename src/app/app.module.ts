import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {dragReducer} from '../store/reducers/drag.reducer';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormBuilderComponent} from './components/builder/form-builder/form-builder.component';
import {FormDraggableFieldsComponent} from './components/builder/form-draggable-fields/form-draggable-fields.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ReactiveComponentModule} from '@ngrx/component';
import {InputFieldComponent} from './components/builder/form-draggable-fields/fields/input-field/input-field.component';
import {
  TextareaFieldComponent
} from './components/builder/form-draggable-fields/fields/textarea-field/textarea-field.component';
import {
  ButtonFieldComponent
} from './components/builder/form-draggable-fields/fields/button-field/button-field.component';
import {
  CheckboxFieldComponent
} from './components/builder/form-draggable-fields/fields/checkbox-field/checkbox-field.component';
import {
  SelectFieldComponent
} from './components/builder/form-draggable-fields/fields/select-field/select-field.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormCreatorComponent} from './components/builder/form-creator/form-creator.component';
import {NgxdModule} from "@ngxd/core";
import {FormDynamicComponent} from './components/builder/form-creator/form-dynamic/form-dynamic.component';
import {BuilderComponent} from './components/builder/builder.component';
import {LoginComponent} from './components/auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RegisterComponent} from './components/auth/register/register.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HomeComponent} from './components/home/home.component';
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {MatIconModule} from "@angular/material/icon";
import {FieldStylesFormComponent} from './components/assets/field-styles-form/field-styles-form.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {PortalModule} from "@angular/cdk/portal";
import { FormCreatorPortalComponent } from './components/builder/form-creator/form-creator-portal/form-creator-portal.component';
import { DraggableFieldsPortalComponent } from './components/builder/form-draggable-fields/draggable-fields-portal/draggable-fields-portal.component';
import { FormAccordionComponent } from './components/builder/form-accordion/form-accordion.component';
import { FormAccordionPortalComponent } from './components/builder/form-accordion/form-accordion-portal/form-accordion-portal.component';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from "./app.effects";
import { UpperCasePipe } from './pipes/upper-case.pipe';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { AuthInputComponent } from './components/assets/auth-input/auth-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormDraggableFieldsComponent,
    InputFieldComponent,
    TextareaFieldComponent,
    ButtonFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    FormCreatorComponent,
    FormDynamicComponent,
    BuilderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FieldStylesFormComponent,
    FormCreatorPortalComponent,
    DraggableFieldsPortalComponent,
    FormAccordionComponent,
    FormAccordionPortalComponent,
    UpperCasePipe,
    AuthInputComponent
  ],
  imports: [
    ReactiveComponentModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    StoreModule.forRoot({'formBuilder': dragReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ColorPickerModule,
    NgxdModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    PortalModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
