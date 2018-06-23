import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from './../pet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet = {name: ''};
  errs: String;
  constructor(private _petz: PetService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._petz.getOne(this._route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      if (data['status'] === 'bad') {
        this._router.navigate(['/pets']);
      } else {
        this.pet = data['data'];
      }
    });
  }
  editing(id) {
    console.log("LOOKG HERE", this.pet);
    this._petz.update(this._route.snapshot.paramMap.get('id'), this.pet).subscribe(data => this._router.navigate(['/pets/details/'+id]));
  }
}
