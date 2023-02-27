import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[] = [10,20,30,40];

  public names:string[] = ["John","Anil","Bose","Chaitanya","David"];

  public states:string[] = ["Telangana","Andhara","Tamilnadu","Karnataka"];

  public users:any = [
    {name:'abc', phone:993993773},
    {name:'def', phone:737737373},
    {name:'xyz', phone:223233232}
  ]

  public products:any = [
    {name:'pen', price:'10', rating:2},
    {name:'shirt', price:'1500', rating:3},
    {name:'mobile', price:'12000', rating:4},
    {name:'tv', price:'25000', rating:4.5},
  ]


 public name:string = "";
 public allNames:string[] = [];

 register(){
  this.allNames.push(this.name);
 }









}
