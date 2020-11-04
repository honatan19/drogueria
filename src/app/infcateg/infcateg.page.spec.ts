import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfcategPage } from './infcateg.page';

describe('InfcategPage', () => {
  let component: InfcategPage;
  let fixture: ComponentFixture<InfcategPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfcategPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfcategPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
