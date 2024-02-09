import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SidebarComponentService } from './sidebar.component.service';

@Component({
  selector: 'cssalc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public items: TreeNode[] | null = null;
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
    this.items?.forEach((node) => {
      this.expandRecursive(node, this.isExpandedAll);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
