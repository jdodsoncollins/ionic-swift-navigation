import { Component } from '@angular/core';

declare global  {
  interface PluginRegistry {
      MyPlugin?: MyPlugin;
  }
}

interface MyPlugin {
  echo(): Promise<any>;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
}
