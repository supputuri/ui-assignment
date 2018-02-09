import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AllpostsComponent } from './allposts/allposts.component';

 const appRoutes: Routes = [
   { path: 'allposts', component: AllpostsComponent},
   { path: 'postdetails/:id', component: PostdetailsComponent}];


@NgModule({
  declarations: [
    AppComponent,
    PostdetailsComponent,
    AllpostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
