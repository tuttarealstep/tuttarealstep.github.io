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
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.menuIsOpen = false;
        this.menuItems = [
            { "url": "/home", "name": "Home" },
            { "url": "/about", "name": "About" },
            { "url": "/skills", "name": "Skills" }
        ];
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            templateUrl: 'app/header/header.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQVFwRDtJQUFBO1FBQ0UsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQUc7WUFDVixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQztZQUMvQixFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBQztZQUNqQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQztTQUNwQyxDQUFDO0lBUUosQ0FBQztJQXJCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDaEMsQ0FBQzs7dUJBQUE7SUFpQkYsc0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLHVCQUFlLGtCQWUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIG1lbnVJc09wZW4gPSBmYWxzZTtcblxuICBtZW51SXRlbXMgPSBbXG4gICAge1widXJsXCI6IFwiL2hvbWVcIiwgXCJuYW1lXCI6XCJIb21lXCJ9LFxuICAgIHtcInVybFwiOiBcIi9hYm91dFwiLCBcIm5hbWVcIjpcIkFib3V0XCJ9LFxuICAgIHtcInVybFwiOiBcIi9za2lsbHNcIiwgXCJuYW1lXCI6XCJTa2lsbHNcIn1cbiAgXTtcblxuICAvKnRlc3RhbGVydCgpXG4gIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgfSwgMTAwMCk7XG4gIH0qL1xufVxuIl19