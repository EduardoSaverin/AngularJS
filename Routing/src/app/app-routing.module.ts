import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthguardService } from "./authguard.service";

const appRoutes = [
    {path: '' , component:HomeComponent},
    {path: 'users', component:UsersComponent,children:[
      {path: ':id/:name', component:UserComponent}
    ]},
    {path: 'servers',/*canActivate:[AuthguardService]*/canActivateChild:[AuthguardService] ,component:ServersComponent,children:[
      {path: ':id',component:ServerComponent},
      {path: ':id/edit',component:EditServerComponent}
    ]},
    {path:'something',component:NotFoundComponent},
    // {path:'not-found',redirectTo:'something'}
    {path:'**',redirectTo:'something'}
  ]

  @NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule{

  }