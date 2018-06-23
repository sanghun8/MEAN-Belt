import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: any[];
  constructor(private _smallones: PetService) { }

  ngOnInit() {
    this._smallones
      .getAll()
      .subscribe(data => {
        console.log('Here is your data', data);
        this.pets = data['data'];
      });

  }
  deletePet(id) {
    this._smallones.delete(id).subscribe(data => this.ngOnInit());
  }
}
