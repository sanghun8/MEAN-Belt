import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: String;
  description: String;
  type: String;
  skill1: String;
  skill2: String;
  skill3: String;
  errs: any[];
  constructor(private _pet: PetService, private _router: Router) { }

  ngOnInit() {
    this.pet = '';
    this.errs = [];
  }

  addPet() {
    // tslint:disable-next-line:max-line-length
    this._pet.add({name: this.pet, type: this.type, description: this.description, skill1: this.skill1, skill2: this.skill2, skill3: this.skill3})
    .subscribe(data => {
      if (data['status'] === 'good') {
        this._router.navigate(['/pets']);
      } else {
        this.errs = this.extractErrs(data['data']);
      }
    });
    }
    extractErrs(err_obj) {
      let res = [];
      for(let key in err_obj.errors) {
        res.push(err_obj.errors[key].message)
      }
      return [res];
    }

}
