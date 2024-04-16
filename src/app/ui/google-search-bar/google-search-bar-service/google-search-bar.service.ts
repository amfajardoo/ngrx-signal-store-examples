import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleSearchBarService {
  isOverlayOpen = signal(false);
  recentSearches = signal<string[]>(['angular', 'rxjs', 'signals']);

  constructor() {}

  search(searchTerm: string) {
    this.isOverlayOpen.set(false);
    this.addToRecentSearches(searchTerm);
  }

  addToRecentSearches(term: string) {
    const lowerCaseTerm = term.toLowerCase();
    // this.recentSearches.set([lowerCaseTerm, ...this.recentSearches().filter(s => s !== lowerCaseTerm)]);
    this.recentSearches.update((searches) => [
      lowerCaseTerm,
      ...searches.filter((s) => s !== lowerCaseTerm),
    ]);
  }
}
