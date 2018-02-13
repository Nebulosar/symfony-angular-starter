import {APP_BASE_HREF} from '@angular/common';
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
            ],
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));
});
