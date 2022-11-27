import { ColorEntity } from '@color-palette/api-interfaces';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { GoogleAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  dataBasePath = '/saved-palettes/'

  dt: any;

  constructor(
    public firebaseAuth : AngularFireAuth,
    private router : Router,
    private dataBase: AngularFireDatabase) { }

  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  signWithGoogle() {
    return this.firebaseAuth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

  create(colorEntity: ColorEntity) {
    this.dataBase.list(this.dataBasePath + localStorage.getItem('token')).push(colorEntity);
  }

  get(): Observable<any> {
    const databaseRef = this.dataBase.list(this.dataBasePath + localStorage.getItem('token'));
    return this.dt = databaseRef.snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
    }));

  }

  delete(key: string) {
    const databaseRef = this.dataBase.list(this.dataBasePath + localStorage.getItem('token'));
    databaseRef.remove(key);
  }

  update(key: string, nameValue: string, descValue: string) {
    const databaseRef = this.dataBase.list(this.dataBasePath + localStorage.getItem('token'));
    databaseRef.update(key, {'name': nameValue, 'description': descValue} );
  }

}
