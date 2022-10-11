import { ProjectsComponent } from './components/organisms/projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/organisms/contact-page/contact-page.component';
import { EmailFormComponent } from './components/molecules/contact/email-form/email-form.component';
import { PhoneComponent } from './components/molecules/contact/phone/phone.component';

const routes: Routes = [
  {
    path: 'projects', 
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    children: [
      {
        path: 'email',
        component: EmailFormComponent
      },
      {
        path: 'cellphone',
        component: PhoneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
