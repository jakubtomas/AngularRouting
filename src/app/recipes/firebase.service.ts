import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject,AngularFireList} from '@angular/fire/database';
import Tutorial from './models/tutorial.module';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})

/*class Tutorial {
  key?: string | null;
  title?: string;
  description?: string;
  published?: boolean;
}*/

export class FirebaseService {

  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Tutorial>;

  list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

 /* create(tutorial: Tutorial): any {
    this.list = this.db.list('/tutorials');
    if (tutorial) {

      console.log("Function ccreate firebase. service");

      return this.list.push(
          {
            title: tutorial.title,
            description:tutorial.description,
          }
      );
    }
  }
*/

  create(tutorial: Tutorial) {
    console.log("Function create firebase .service.ts");
    return this.tutorialsRef.push(tutorial)
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }


}



