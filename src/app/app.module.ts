import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
} from '@angular/fire/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  NzButtonModule,
  NzInputModule,
  NzIconModule,
  NzCheckboxModule,
  NzSwitchModule,
  NzMenuModule,
  NzLayoutModule } from 'ng-zorro-antd';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoService } from './services/todo.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzCheckboxModule,
    NzSwitchModule,
    NzMenuModule,
    NzLayoutModule
  ],
  providers: [AngularFireDatabase, { provide: NZ_I18N, useValue: en_US }, TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
