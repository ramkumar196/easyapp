import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }
  
  listdata = [
  {
    'id':1,
    'product_name':'Product 001',
    'product_image':'assets/images/image-001.jpg'
  },
  {
    'id':2,
    'product_name':'Product 003',
    'product_image':'assets/images/image-002.jpg'
  },
  {
    'id':3,
    'product_name':'Product 003',
    'product_image':'assets/images/image-003.jpg'
    
  }
];

 get_data()
{
  return this.listdata;
}

}
