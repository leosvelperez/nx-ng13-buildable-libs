import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NonBuildableLibModule } from '@my-org/non-buildable-lib';

@NgModule({
  imports: [CommonModule, NonBuildableLibModule],
})
export class BuildableLibModule {}
