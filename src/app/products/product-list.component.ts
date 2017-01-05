import { Component} from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Table",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "Wooden garden table",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/download/230309/garden-table.svg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0023",
            "releaseDate": "January 3, 2017",
            "description": "A hammer for household works",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/download/193438/freehammer.svg"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}