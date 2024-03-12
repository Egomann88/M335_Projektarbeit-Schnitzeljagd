import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockStorageService {
  private storage: { [key: string]: any } = {};

  public async set(key: string, value: any) {
    this.storage[key] = value;
  }

  public async get(key: string): Promise<any> {
    return this.storage[key];
  }

  public async remove(key: string) {
    delete this.storage[key];
  }
}
