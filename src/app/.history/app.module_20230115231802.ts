import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ModifierComponent } from './employe/modifier/modifier.component';
import { ListeComponent } from './employe/liste/liste.component';
import { AjouterComponent } from './employe/ajouter/ajouter.component';
import { UpdateComponent } from './employe/update/update.component';
import { SupprimerComponent } from './employe/supprimer/supprimer.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ModifierComponent,
    ListeComponent,
    AjouterComponent,
    UpdateComponent,
    SupprimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    // ToastrModule,
    RouterModule.forRoot([
    { path: '', component: AppComponent },
    { path: 'modif/:id', component: ModifierComponent },
    { path: 'liste', component: ListeComponent },
    { path: 'ajout', component: AjouterComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'delete/:id', component: SupprimerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
