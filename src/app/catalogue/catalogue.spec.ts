import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalogue } from './catalogue';

registerLocaleData(localeFr);

describe('Catalogue', () => {
  let fixture: ComponentFixture<Catalogue>;
  let component: Catalogue;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalogue],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should filter products and add the selected product to the cart', () => {
    fixture.detectChanges();

    const search = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    search.value = 'dash';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('app-produit-card')).toHaveLength(1);
    expect(fixture.nativeElement.textContent).toContain('Dashcam');

    const addButton = fixture.nativeElement.querySelector(
      'app-produit-card button',
    ) as HTMLButtonElement;
    addButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Dashcam');
  });
});
