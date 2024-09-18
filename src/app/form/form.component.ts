import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileItem, FileOwner } from '../../models/file.item.model';
import { OwnerServiceService } from '../services/ownerService.service';
import {FileType } from '../../models/file.item.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ArchivoService } from '../services/archivo.service';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  newFileOrFolder: FileItem = {
    id:'',
    name: '',
    creation: new Date(),
    owners: [], 
    type: FileType.FILE, 
    parentId: undefined, 
  };
  owners : FileOwner[] = []
  ownersSelected : FileOwner[]=[]
  tiposArchivo = Object.values(FileType).filter(value => typeof value === 'string');
  @Output() showForm = new EventEmitter();
  returnToList() 
   {
  this.showForm.emit()
   }
  constructor(private ownerService: OwnerServiceService, private archivoService : ArchivoService) 
  {
    
  } 

  ngOnInit() {
    this.owners = this.ownerService.getOwners()
  }

   addSelectedOwner($event: Event) {
    this.ownerService.addSelectedOwnerService($event)
    this.ownersSelected=this.ownerService.getSelectedOwners()
    }
    saveFileOrFolder(form: NgForm) {
      if (form.invalid) {
        alert("Formulario invalido");
        console.log(form);
        return;
      }
      
  this.newFileOrFolder.id = this.generateUUID();
  this.newFileOrFolder.owners = this.ownersSelected;
  const newItem = { ...this.newFileOrFolder }; 
  form.reset();
  this.ownersSelected=[]
  this.archivoService.addNewFileOrFolder(newItem);
  console.log(this.archivoService.getArchivos());
     
    }

    private generateUUID(): string {
      return crypto.randomUUID();
    }



}
