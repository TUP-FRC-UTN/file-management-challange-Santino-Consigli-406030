import { Injectable } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { Observable, of } from 'rxjs';
import { FileItem, FileOwner } from '../../models/file.item.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  getArchivos(): Observable<FileItem[]> {
    return of(FILE_LIST);
  }
  getOwners(): Observable<FileOwner[]> {
    return of(OWNERS);
  }
  
}
