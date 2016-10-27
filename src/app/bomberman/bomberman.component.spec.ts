/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BombermanComponent } from './bomberman.component';

describe('BombermanComponent', () => {
  let component: BombermanComponent;
  let fixture: ComponentFixture<BombermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
