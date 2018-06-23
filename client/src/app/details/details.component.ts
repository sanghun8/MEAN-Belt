import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from './../pet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pets: any[];
  errs: String[];

  constructor(private _smallerones: PetService,  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._smallerones.getOne(this._route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log('Are we getting this data', data);
      if (data['status'] === 'bad') {
        this._router.navigate(['/pets']);
      } else {
        this.pets = data['data'];
        console.log("WHY WONT YOU SHOW UP", this.pets);
        console.log("WHATS THEA DEAL WIT DATA", data);
      }
    });
  }

  deletePet(id) {
    console.log(id)
    this._smallerones.delete(this._route.snapshot.paramMap.get('id')).subscribe(data => this._router.navigate(['/pets']));
  }
}
