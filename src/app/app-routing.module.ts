import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/pages/main/main.component';


import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { ShowBookComponent } from './components/pages/show-book/show-book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';

const routes: Routes = [
    { path: "", component: MainComponent },

    { path: "login", component: LoginComponent },
    { path: "book/new", component: AddBookComponent ,canActivate : [AuthGuard]},
    { path: "book", component:  ShowBookComponent,canActivate : [AuthGuard]},
    { path: "book/edit/:id", component:  EditBookComponent,canActivate : [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
