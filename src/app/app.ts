import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Home } from './pages/home/home';
import { Footer } from './shared/components/footer/footer';
import { Login } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('farmerToCustomer_ui');
}
