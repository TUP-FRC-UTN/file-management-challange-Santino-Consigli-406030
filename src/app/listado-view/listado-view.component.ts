import { Component } from '@angular/core';
import { ArchivoService } from '../services/archivo.service';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule, NgIf } from '@angular/common';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-listado-view',
  standalone: true,
  imports: [CommonModule, FormComponent,NgIf],
  templateUrl: './listado-view.component.html',
  styleUrl: './listado-view.component.css'
})
export class ListadoViewComponent {

  contador: number=0;
  showList: boolean=true;
  archivos: FileItem[] = [];
  
  constructor(private archivoService: ArchivoService) 
  {

  }
  navigateToForm() {
    this.showList = false;  
  }
  navigateToList() {
    this.showList = true;  
  }

  ngOnInit() {
    this.archivos= this.archivoService.getArchivos()
    this.ordenarPorFolderAndAlfabeticamente();
  
  }
  ordenarPorFolderAndAlfabeticamente() {
    this.archivoService.orderFolderAndFiles(this.archivos)
   }

addOrRemoveToListSelectedArchivos(archivo: FileItem) 
{ 
  //añade o elimina de la lista temporal de archivos para eliminar, 
  //si ya existe en el array lo borra sino, lo añade (evento onchange del checkbox)
  this.archivoService.addOrRemoTolistArchivos(archivo)
}

deleteSelected() 
{
  this.archivoService.deleteFolderOrFileSelected()
}

 deleteArchivos(archivosToDelete: FileItem[]) {

  this.archivoService.deleteArchivosAndFilesIncluded(archivosToDelete) 
}

}
