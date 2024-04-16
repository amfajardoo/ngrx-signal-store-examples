import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GoogleSearchBarService } from '../google-search-bar/google-search-bar-service/google-search-bar.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [MatDivider, MatListModule, MatIcon, MatIconButton],
  template: `
    <div class="overlay-container mat-elevation-z2">
      <mat-divider />
      <mat-action-list>
        @for (search of recentSearches(); track search) {
          <mat-list-item>
            <mat-icon matListItemIcon>history</mat-icon>
            <h3 matListItemTitle>{{ search }}</h3>
            <button matListItemMeta mat-icon-button>
              <mat-icon>close</mat-icon>
            </button>
          </mat-list-item>
        }
      </mat-action-list>
    </div>
  `,
  styles: `
    .overlay-container {
      border-radius: 0px 0px 32px 32px;
      min-width: 468px;
      background: white;
      padding-bottom: 16px;
    }
  `,
})
export class SearchOverlayComponent {
  searchBarService = inject(GoogleSearchBarService);
  recentSearches = this.searchBarService.recentSearches;
}
