"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_home_component_1 = require('./app.home.component');
var header_component_1 = require('./header.component');
var boy_component_1 = require('./boy.component');
var men_component_1 = require('./men.component');
var accessories_component_1 = require('./accessories.component');
var jacket_component_1 = require('./jacket.component');
var appRoutes = [
    { path: '', component: app_home_component_1.HomeComponent },
    { path: 'boys', component: boy_component_1.BoyComponent },
    { path: 'men', component: men_component_1.MenComponent },
    { path: 'accessories', component: accessories_component_1.AccessoriesComponent },
    { path: 'jacket', component: jacket_component_1.JacketComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, app_home_component_1.HomeComponent, header_component_1.HeaderComponent, boy_component_1.BoyComponent, men_component_1.MenComponent,
                accessories_component_1.AccessoriesComponent, jacket_component_1.JacketComponent],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [header_component_1.HeaderComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map