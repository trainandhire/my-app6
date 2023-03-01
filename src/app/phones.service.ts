import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  public phones:any = [
    {company:'samsung',price:18000},
    {company:'iphone',price:50000},
    {company:'redmi',price:12000},
    {company:'vivo',price:14000}
  ];

}
