import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { GoogleSearchBarService } from '../../services/google-search-bar.service';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-google-search-bar',
  standalone: true,
  templateUrl: './google-search-bar.component.html',
  styleUrl: './google-search-bar.component.scss',
  imports: [
    MatIconButton,
    MatIcon,
    OverlayModule,
    SearchOverlayComponent,
    NgClass,
  ],
})
export class GoogleSearchBarComponent {
  searchBarService = inject(GoogleSearchBarService);
  isOverlayOpen = this.searchBarService.isOverlayOpen;

  search(term: string) {
    console.log('SEARCH...');
    if (!term) return;

    this.searchBarService.search(term);
  }
}
