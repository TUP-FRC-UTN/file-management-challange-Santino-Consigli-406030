import { Injectable } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
 
 
constructor() { }

ownersSelected : FileOwner[]=[]

getOwners() : FileOwner[]
{
  return OWNERS
}

addSelectedOwnerService(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  const selectedOwnerName = selectElement.value;
  const ownerToAdd = this.getOwners().find(owner => owner.name === selectedOwnerName);
  if(!this.ownersSelected.find(o=> o.name===ownerToAdd?.name))
  {
    if(ownerToAdd)
    {
      this.ownersSelected.push(ownerToAdd)
    }
  }
}

getSelectedOwners(): FileOwner[] {
  return this.ownersSelected;
}

}
