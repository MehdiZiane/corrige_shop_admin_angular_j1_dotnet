import { Component, inject } from '@angular/core';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'ShopAdmin';
  panierService = inject(PanierService);
}
