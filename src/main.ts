import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component'; 
import { AboutComponent } from './app/about/about.component';
import { BlogComponent } from './app/blog/blog.component'; 
import { ContactComponent } from './app/contact/contact.component'; 
import { CartComponent } from './app/cart/cart.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouterModule,
      useFactory: () => RouterModule.forRoot(routes)
    }
  ]
})
  .catch(err => console.error(err));
