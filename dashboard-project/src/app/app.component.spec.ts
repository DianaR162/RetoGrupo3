import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NgbModalModule,        
        RouterTestingModule,   
        HeaderComponent,      
        ModalComponent         
      ],
      providers: [
        { provide: NgbActiveModal, useValue: {} }  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal', () => {
    const spy = spyOn(component['modalService'], 'open');
    component.openModal();
    expect(spy).toHaveBeenCalledWith(ModalComponent);
  });

  it('should render header component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  });
});