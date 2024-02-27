import { Component, OnInit } from '@angular/core';
import { SidebarComponentService } from './sidebar.component.service';

@Component({
  selector: 'cssalc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public items: any | null = null;
  public isExpandedAll: boolean = false;

  constructor(private sidebarService: SidebarComponentService) {}

  ngOnInit() {
    this.sidebarService.getItems().then((data) => (this.items = data));
  }

//   expandAll() {
//     this.items?.forEach((node) => {
//       this.expandRecursive(node, true);
//     });
//   }

//   collapseAll() {
//     this.items?.forEach((node) => {
//       this.expandRecursive(node, false);
//     });
//   }

  expandCollapseAll() {
    this.isExpandedAll = !this.isExpandedAll;
    this.items?.forEach((node: any) => {
      this.expandRecursive(node, this.isExpandedAll);
    });
  }

  private expandRecursive(node: any, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode: any) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
