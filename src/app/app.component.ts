import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Item} from './item';
import { ItemService } from './item.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public items: Item[];
  public editItem!: Item;
 


  constructor (private itemService: ItemService){
    this.items=[];
  }

    ngOnInit(){this.getItems();}

  public getItems(): void{
    this.itemService.getItems().subscribe(
      (response: Item[])=> {
        this.items=response;
        console.log(this.items);
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  //genero un nuevo metodo que le voy a pasar un item,el "mode" me ayudara a determinar que quiere hacer el usuario,agregar,editar,etc.
  public onOpenModal(item: Item, mode: String): void{
    const container=document.getElementById('main-container');
    //genero un boton
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'edit'){
      this.editItem=item;
      button.setAttribute('data-target','#editItemModal');
    }
      container?.appendChild(button);
      button.click();
  }

  public onAddItem(addForm: NgForm): void{
this.itemService.addItem(addForm.value).subscribe(
(response: Item) => {
  console.log(response);
  this.getItems();
},
(error: HttpErrorResponse) => {
  alert(error.message);
}
);
  }

  public onEditItem(item: Item): void{
    this.itemService.editItem(item).subscribe(
    (response: Item) => {
      console.log(response);
      this.getItems();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
    
  }
    public onDeleteItem(itemId: number): void {
      this.itemService.deleteItem(itemId).subscribe(
        (response:void) => {
          this.getItems();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }
      }


