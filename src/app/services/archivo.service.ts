import { Injectable } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  
  
  selectedArchivos: FileItem[] = [];

  fileItems : FileItem[] = FILE_LIST

  deleteArchivosAndFilesIncluded(archivosToDelete: FileItem[]) {
    console.log('funciona')
    archivosToDelete.forEach(archivo => {
      const index = this.getArchivos().indexOf(archivo)
      if (index > -1) {
      this.getArchivos().splice(index, 1);
      }
    });
    this.selectedArchivos = [];  
  }
  deleteFolderOrFileSelected() {
    if (this.selectedArchivos.length === 1) 
    {
        this.deleteArchivosAndFilesIncluded(this.selectedArchivos);
    } 
    else if 
    (this.selectedArchivos.length > 1) 
    {
        if (confirm(`¿Seguro de querer borrar estos ${this.selectedArchivos.length} archivos?`)) 
        {
          console.log(this.selectedArchivos)
          this.deleteArchivosAndFilesIncluded(this.selectedArchivos);
        }
    }
  }
  addOrRemoTolistArchivos(archivo: FileItem) {
  const index = this.selectedArchivos.indexOf(archivo);
  if (index > -1) 
  {
    this.selectedArchivos.splice(index, 1);
  } else 
  {
    this.selectedArchivos.push(archivo);
  }
  }

    orderFolderAndFiles(archivos: FileItem[]) {
    archivos.sort((a, b) => {
    
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
  addNewFileOrFolder(newFileOrFolder: FileItem) {
      this.fileItems.push(newFileOrFolder)
  }

  getArchivos(): FileItem[] {
    return this.fileItems
  }
 


  
  
}
