import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { GameHttpService } from '../game-http.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-view-link',
  templateUrl: './view-link.component.html',
  styleUrls: ['./view-link.component.css'],
  providers: [Location]
})
export class ViewLinkComponent implements OnInit {

  public getalldata:any;

  constructor(public _http:HttpClientModule, public router:Router, public _route: ActivatedRoute, public game: GameHttpService, public location:Location) { }

  ngOnInit() {
    //Get the URL as id from the details page
    let id = this._route.snapshot.paramMap.get('id');
    //Get the data from REST services based on the passed URL
    this.game.getalldata(id).subscribe(
      data => {
        this.getalldata = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  //Go back to previous page
  public goBackLocation() :any{
    this.location.back();
  }

}
