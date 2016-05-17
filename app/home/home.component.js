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
var header_component_1 = require('../header/header.component');
var footer_component_1 = require('../footer/footer.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: 'app/home/home.component.html',
            directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLGlDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBQzdELGlDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBUTdEO0lBQUE7SUFBNEIsQ0FBQztJQU43QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSxrQ0FBZSxDQUFDO1NBQy9DLENBQUM7O3FCQUFBO0lBRTBCLG9CQUFDO0FBQUQsQ0FBQyxBQUE3QixJQUE2QjtBQUFoQixxQkFBYSxnQkFBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7fVxuIl19