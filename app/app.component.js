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
var movie_service_1 = require('./movie.service');
var AppComponent = (function () {
    function AppComponent(_movieService) {
        this._movieService = _movieService;
        this.movies = [];
    }
    AppComponent.prototype.getMovies = function () {
        var _this = this;
        this.isLoading = true;
        this._movieService.getMovie(this.movietitle)
            .subscribe(function (data) {
            return _this.movies = data;
        }, null, function () { return _this.isLoading = false; });
    };
    AppComponent.prototype.select = function (m) {
        var _this = this;
        this.currentDetail = m;
        this.detailLoading = true;
        this._movieService.getDetail(m.Title)
            .subscribe(function (data) {
            return _this.currentDetail = data;
        }, null, function () { return _this.detailLoading = false; });
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map