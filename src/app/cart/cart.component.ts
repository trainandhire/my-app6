import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any = [
    {name:'pen',price:20,rating:3.8,isFreeDelivery:true},
    {name:'phone',price:12000,rating:3.1,isFreeDelivery:false},
    {name:'toy',price:300,rating:4.8,isFreeDelivery:true},
    {name:'shirt',price:2500,rating:2.7,isFreeDelivery:false},
    {name:'bag',price:3400,rating:1.8,isFreeDelivery:true},
    {name:'laptop',price:45000,rating:3.0,isFreeDelivery:false},
    {name:'table',price:17000,rating:4.4,isFreeDelivery:true},
    {name:'tv',price:45000,rating:5.0,isFreeDelivery:false},
    {name:'clock',price:1500,rating:3.3,isFreeDelivery:true},
    {name:'lock',price:150,rating:4.8,isFreeDelivery:false},
  ];

  delete(i:number){

    this.products.splice(i,1);

  }

  count(){
    alert("Cart count is "+this.products.length);
  }

  onlyfree(){
    this.products = this.products.filter( (product:any)=> product.isFreeDelivery == true);
  }

  pricelh(){
    this.products = this.products.sort( (a:any, b:any)=>a.price-b.price );
  }

  discount(){
    this.products = this.products.map( (product:any)=> {
      product.price = product.price/2;
      return product;
    })
  }

  charges(){
    this.products = this.products.map( (product:any)=> {
      if(product.isFreeDelivery==false){
        product.price = product.price+20;
      }
      return product;
    })
  }

  total(){
    var total = this.products.reduce( (sum:any, a:any)=>sum+a.price,0 );

    alert("Total cart price: "+total);

  }

  public term:string = "";

  search(){
    this.products = this.products.filter((product:any)=>  product.name.indexOf(this.term) != -1);
  }

  public product:any = {};

  create(){
    this.products.unshift(
      this.product)
  }
}
