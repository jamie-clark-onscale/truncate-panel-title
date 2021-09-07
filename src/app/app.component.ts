import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private selectedItems: string[] = ['an item', 'another item', 'some other item', 'name', 'selected', 'lorum'];
  public panelTitle: string;
  public panelTitleSuffix: number;

  ngOnInit(): void {
    this.panelTitle = this.selectedItems.join(', ');
    this.panelTitleSuffix = this.selectedItems.length;
  }
}
