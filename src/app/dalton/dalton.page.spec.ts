import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaltonPage } from './dalton.page';

describe('DaltonPage', () => {
  let component: DaltonPage;
  let fixture: ComponentFixture<DaltonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaltonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaltonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
