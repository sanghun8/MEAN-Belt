import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/api/pets');
  }

  add(data) {
     return this._http.post('/api/pets', data);

  }
  getOne(id ) {
    return this._http.get('/api/pets/' + id);
  }

  update(id, pet) {
    console.log(pet);
    return this._http.put('/api/pets/' + id, {name: pet.name, description: pet.description, type: pet.type, skill1: pet.skill1,
    skill2: pet.skill2, skill3: pet.skill3});
  }

  delete(id) {
    return this._http.delete('/api/pets/' + id);
  }
}
