import { Component, OnInit } from '@angular/core';
import { GameHttpService } from '../game-http.service';
import { error, element } from 'protractor';

import { DefaultUrlSerializer } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public arraySort = require('array-sort');

  public getalldata: any[] = [];

  public mapdata = new Map();

  constructor(public _route:GameHttpService) { 
    console.log("constructor initialized");
  }

  ngOnInit() {
    //call books method
    let getBookData = this.getBooks();    
  }

  public getBooks():any {
    //Get the data from REST services
    this._route.getAllBooks().subscribe(
      data => {
        let myresponse = data;
        console.log(myresponse);
        //Sort the data by name. Datas are sorted by each category 
        this.arraySort(myresponse,'name');        
        this.getCharacters(myresponse);
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }
  public getCharacters(myresponse):any{
    //Get the data from REST services
    this._route.getAllCharacters().subscribe(
      data => {
        
        let myresponses = data;
        //Sort the data by aliases name
        this.arraySort(myresponses,'aliases');
        //Concat the array of objects
        myresponses = myresponses.concat(myresponse);
        this.getHouses(myresponses);
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }
  public getHouses(myresponse):any{
    //Get the data from REST services
    this._route.getAllHouses().subscribe(
      data => {
        let myresponses = data;
        //Sort the data by aliases name
        this.arraySort(myresponses,'name');
        //Concat the array of objects
        myresponses = myresponses.concat(myresponse);
        this.getalldata = myresponses;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }
}
