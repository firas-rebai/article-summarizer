import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPapersComponent } from "./list-papers/list-papers.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ListPapersComponent,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class AppModule { }
