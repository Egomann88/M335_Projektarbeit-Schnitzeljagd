import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage$: Promise<Storage>;

  constructor(private storage: Storage) {
    this._storage$ = this.storage.create();
  }

  public async set(key: string, value: any) {
    (await this._storage$).set(key, value);
  }

  public async get(key: string): Promise<any> {
    return (await this._storage$).get(key)
  }

}
