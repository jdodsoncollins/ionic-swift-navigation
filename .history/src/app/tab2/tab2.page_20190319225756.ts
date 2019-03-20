import { Component } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';

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
  takenPicture: any;
async takePicture() {
    const takePicture = await Plugins.Camera.getPhoto(
      {
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      }
    );
 
    this.takenPicture = takePicture.webPath;
   }

   async nav() {
    const { MyPlugin } = Plugins;

    console.log('ECHO IS ', MyPlugin.echo());

    MyPlugin.echo().then((result) => {
      console.log(result);
  });
   }
}
