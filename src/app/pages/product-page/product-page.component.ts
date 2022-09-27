import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/products.services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
 title = 'downloader';
  // products: IProduct[]=[]
  loading = false
  // products$:Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
    ){
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(()=>this.loading=false)
    // )
    this.productsService.getAll().subscribe(()=> {
      this.loading = false
    })
  }

}
