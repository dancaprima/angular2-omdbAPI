import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService{
    constructor(private _http: Http){

    }
    getMovie(movietitle){
        return this._http.get("http://www.omdbapi.com/?s="+movietitle)
        .map(res => res.json());
    }

    getDetail(moviedetail){
        return this._http.get("http://www.omdbapi.com/?t="+moviedetail+"&tomatoes=true")
        .map(res => res.json());
    }
    getUser(){
        return this._http.get("http://jsonplaceholder.typicode.com/posts")
        .map ( res=> res.json());
    }
}