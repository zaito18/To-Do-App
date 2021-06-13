import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // <- importacion
import { Observable } from 'rxjs';
import { Item } from './item';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(`${this.apiServerUrl}/api/v1/items`);
  } 

  public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiServerUrl}/api/v1/items/add`,item);
  }

  public editItem(item: Item): Observable<Item> {
  
    return this.http.put<Item>(`${this.apiServerUrl}/api/v1/items/edit`,item);
  }

  public deleteItem(itemId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/items/delete/${itemId}`);
  }

}
