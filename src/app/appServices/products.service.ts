import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor() { }

products = [
  {
    Id : 1,
    Name : 'Laptop',
    img: "../../assets/macbook-air-space-gray-select-201810.jfif",
    quantity: 0
   
  },
  {
    Id : 2,
    Name : 'Phone',
    img: "../../assets/Apple-iPhone-13-Mini-Smartphones-491997723-i-2-1200Wx1200H.jfif",
    quantity: 0
  },

  {
    Id : 3,
    Name : 'Console',
    img: "../../assets/Gear-PS5-2-src-Sony-teal.webp",
    quantity: 0

  },
  {
    Id : 4,
    Name : 'Pre-built',
    img: "../../assets/2021-05-06-image.webp",
    quantity: 0

  }
]

}
