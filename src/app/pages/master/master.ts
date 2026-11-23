import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../core/services/master';
import { ApiResponseModel } from '../../core/models/interfaces/api-response.model';
import { Category, Role } from '../../core/models/classes/Master.model';

@Component({
  selector: 'app-master',
  imports: [ReactiveFormsModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master implements OnInit {
   
   roleForm! : FormGroup;
   categoryForm! : FormGroup;

   roleList = signal<Role[]>([]);
   categoryList = signal<Category[]>([]);
   

   formBuider = inject(FormBuilder);
   master = inject(MasterService);

   constructor(){
     this.createCategoryForm();
     this.createRoleForm();
   }

   ngOnInit(){
      this.getAllCategory();
      this.getAllRoles();
   }

   createRoleForm(){
      this.roleForm = new FormGroup({
        roleId: new FormControl(0),
        roleName: new FormControl('')
      });
   }

   createCategoryForm(){
      this.categoryForm = this.formBuider.group({
         categoryId : [0],
         name : ['']
      });
   }

   getAllCategory(){
      this.master.getAllCategory().subscribe({
        next: (res: ApiResponseModel)=>{
          this.categoryList.set(res.data);
        } 
      });
   }

    getAllRoles(){
      this.master.getAllRoles().subscribe({
        next: (res: ApiResponseModel)=>{
          this.roleList.set(res.data);
        } 
      });
   }

   onSaveRole(){
      debugger;
      const formValue = this.roleForm.value;
      this.master.createRole(formValue).subscribe({
        next: (res: ApiResponseModel)=>{
          alert("Saved Role Successfully");
          this.getAllRoles();
        }
      });
      console.log(formValue);
   }

   onRoleEdit(roleData: Role){
       debugger;
       this.roleForm.patchValue(roleData);
   }

   onUpdateRole(){
      
   }
   onSaveCategory(){
      debugger;
      const formValue = this.categoryForm.value;
      this.master.createCategory(formValue).subscribe({
        next: (res: ApiResponseModel)=>{
          alert("Saved Category Successfully");
          this.getAllCategory();
        }
      });
   }

}
