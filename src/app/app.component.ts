import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory} from '@angular/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'my-app',
    template: '<header-container #headerContainer></header-container><router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(
        private compFactoryResolver: ComponentFactoryResolver
    ) {
    }

    start() {
    }
}
