import { Component } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
