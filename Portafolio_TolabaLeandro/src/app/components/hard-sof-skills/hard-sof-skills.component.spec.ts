import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSofSkillsComponent } from './hard-sof-skills.component';

describe('HardSofSkillsComponent', () => {
  let component: HardSofSkillsComponent;
  let fixture: ComponentFixture<HardSofSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSofSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSofSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
