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
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-component',
            templateUrl: 'app/about/about.component.html',
            directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsaUNBQWdDLDRCQUE0QixDQUFDLENBQUE7QUFDN0QsaUNBQWdDLDRCQUE0QixDQUFDLENBQUE7QUFRN0Q7SUFBQTtJQUE2QixDQUFDO0lBTjlCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGtDQUFlLENBQUM7U0FDL0MsQ0FBQzs7c0JBQUE7SUFFMkIscUJBQUM7QUFBRCxDQUFDLEFBQTlCLElBQThCO0FBQWpCLHNCQUFjLGlCQUFHLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYm91dC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7fVxuIl19