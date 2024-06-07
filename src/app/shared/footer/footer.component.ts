import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports : [RouterModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  

  showScroll: boolean = false;
  showScrollHeight: number = 100;
  hideScrollHeight: number = 10;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > this.showScrollHeight) {
      this.showScroll = true;
    } else if (scrollPosition < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}