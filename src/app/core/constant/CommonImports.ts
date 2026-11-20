import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

export const CommonImports = {
    FORM_IMPORTS : [FormsModule, ReactiveFormsModule, LowerCasePipe, UpperCasePipe]
}