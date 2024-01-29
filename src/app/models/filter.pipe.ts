import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();
    console.log(searchTerm)

    return items.filter(item => {
      console.log("this is filtered item",item)
      return item.title.toLowerCase().includes(searchTerm);
    });
  }
  transforms(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    console.log("searac, ", searchText)

    return items.filter(item => {
      console.log("dkdsjh", item)
      // if(item&& item.user.FirstName){

        return item.user.FirstName.toLowerCase().includes(searchText);
      // }
    });
  }
}
