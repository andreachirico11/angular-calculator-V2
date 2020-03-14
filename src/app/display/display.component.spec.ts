import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DisplayComponent } from './display.component';
import { AppModule } from '../app.module';

describe('DISPLAY_COMPONENT', () => {

  let displayComponent: DisplayComponent;
  let displayFixture: ComponentFixture<DisplayComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      imports: [AppModule]
    }).compileComponents().then(() => {
      displayFixture = TestBed.createComponent(DisplayComponent);
      displayComponent = displayFixture.componentInstance;

    });
  }));

  it('should receive the input correctly', () => {
    displayComponent.mainNumber = 3;
    displayFixture.detectChanges();
    expect(parseInt(displayFixture.nativeElement.querySelector('h5').innerText)).toEqual(3);
  });

});
