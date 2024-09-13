import { Component } from '@angular/core';
import { ArchivoService } from '../services/archivo.service';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-view.component.html',
  styleUrl: './listado-view.component.css'
})
export class ListadoViewComponent {

  contador: number=0;

  archivos: FileItem[] = [];
  selectedArchivos: FileItem[] = [];
  
  constructor(private archivoService: ArchivoService)
  {

  }

  ngOnInit() {
    this.archivoService.getArchivos().subscribe(
      data => this.archivos = data
    );
    this.ordenarPorFolderAndAlfabeticamente();
  
  }
  ordenarPorFolderAndAlfabeticamente() {
    this.archivos.sort((a, b) => {
    
      if (a.type === b.type) 
      {
        return a.name.localeCompare(b.name);
      }    
      if (a.type === FileType.FOLDER && b.type === FileType.FILE) 
      {
        return -1;
      } 
      else if (a.type === FileType.FILE && b.type === FileType.FOLDER) 
      {
      
        return 1;
      }
      return 0;
    });
    
}
addOrRemoveToListSelectedArchivos(archivo: FileItem) { 
  //añade o elimina de la lista temporal de archivos para eliminar, si ya existe en el array lo borra sino, lo añade (evento onchange del checkbox)
  const index = this.selectedArchivos.indexOf(archivo);
  if (index > -1) {
    this.selectedArchivos.splice(index, 1);
  } else {
    this.selectedArchivos.push(archivo);
  }
}

deleteSelected() {
  if (this.selectedArchivos.length === 1) {
    this.deleteArchivos(this.selectedArchivos);
  } else if (this.selectedArchivos.length > 1) {
    if (confirm(`¿Seguro de querer borrar estos ${this.selectedArchivos.length} archivos?`)) {
      this.deleteArchivos(this.selectedArchivos);
    }
  }
}

 deleteArchivos(archivosToDelete: FileItem[]) {
  archivosToDelete.forEach(archivo => {
    const index = this.archivos.indexOf(archivo);
    if (index > -1) {
      this.archivos.splice(index, 1);
    }
  });
  this.selectedArchivos = [];
}

}
