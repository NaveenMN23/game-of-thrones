import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GameHttpService } from '../game-http.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
  providers:[Location]
})
export class ViewDetailComponent implements OnInit {

  public getalldata:any;

  constructor(public _http:HttpClientModule, public router:Router, public _route: ActivatedRoute, public game: GameHttpService, public location: Location) { }

  ngOnInit() {
    //Get the URL as id from the Home page/ View Link page
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    //Get the data from REST services based on the URL
    this.game.getalldata(id).subscribe(
      data => {
        this.getalldata = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  //Go back location
  public goBackLocation() :any{
    this.location.back();
  }


}
