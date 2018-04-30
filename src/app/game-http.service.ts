import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class GameHttpService {

  private apiBooks ='https://anapioficeandfire.com/api/books';
  private apiCharacters = 'https://anapioficeandfire.com/api/characters';
  private apiHouses = 'https://anapioficeandfire.com/api/houses';

  constructor(private _http:HttpClient) { }

  //Get all book data
  public getAllBooks():any{
    //Get data from API
    let myresponse = this._http.get(this.apiBooks);
    //Return data to component page
    return myresponse;
  }

  //Get all character data
  public getAllCharacters():any{
    //Get data from API
    let myresponse = this._http.get(this.apiCharacters);
    //Return data to component page
    return myresponse;
  }

  //Get all house data
  public getAllHouses():any{
    //Get data from API
    let myresponse = this._http.get(this.apiHouses);
    //Return data to component page
    return myresponse;
  }

  //Get all data by URL
  public getalldata(id):any{
    //Get data from API
    let myresponse = this._http.get(id);
    //Return data to component page
    return myresponse;
  }

}
