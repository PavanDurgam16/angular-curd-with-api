import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "./header/header.component";

fdescribe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,HeaderComponent
     ],
    imports:[ HttpClientTestingModule,
      ReactiveFormsModule,
      AppRoutingModule,
      RouterTestingModule],
  }));

  it('should create instance', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    expect(component).toBeTruthy()
  });
});
