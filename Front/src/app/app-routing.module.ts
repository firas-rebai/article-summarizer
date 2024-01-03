import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ListPapersComponent } from './list-papers/list-papers.component';

const routes: Routes = [
  { path: 'article/:id', component: ArticleComponent },
  { path: 'list', component: ListPapersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
