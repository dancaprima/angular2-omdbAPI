import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [MovieService]
})

export class AppComponent implements OnInit {

    public movietitle;
    movies = [];
    currentDetail;
    isLoading;
    detailLoading;

    constructor(private _movieService: MovieService) {

    }


    getMovies() {
        this.isLoading=true;
        this._movieService.getMovie(this.movietitle)
            .subscribe(data => 
            this.movies = data,null,()=> this.isLoading=false
                
            );

    }

    select(m){
        this.currentDetail = m;
        this.detailLoading=true;

         this._movieService.getDetail(m.Title)
            .subscribe(data => 
            this.currentDetail = data,null,()=> this.detailLoading=false
                
            );
    }

    ngOnInit() {
    }


}