import { Component } from '@angular/core';
import { CommonImports } from '../../core/constant/CommonImports';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonImports.FORM_IMPORTS, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
