import { Component, OnInit } from '@angular/core';
import { ThemeIconsComponent } from '../theme-icons/theme-icons.component';

@Component({
  selector: 'app-header',
  imports: [ThemeIconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  theme: 'dark' | 'light' | 'auto' = 'dark';
  headerClass: string = 'bg-dark text-white';

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | 'auto' | null;
    if (savedTheme) {
      this.toggleTheme(savedTheme);
    } else {
      this.toggleAutoTheme();
    }
  }

  toggleDarkTheme() {
    this.toggleTheme('dark');
  }

  toggleLightTheme() {
    this.toggleTheme('light');
  }

  toggleAutoTheme() {
    this.toggleTheme('auto');
  }

  toggleTheme(theme: 'dark' | 'light' | 'auto') {
    this.theme = theme;
    let themeToApply = theme;
    if (theme === 'auto') {
      themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-bs-theme', themeToApply);
    this.headerClass = themeToApply === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
    localStorage.setItem('theme', theme);
  }
}
