import { Component,} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'ngx-googlemap',
  styleUrls: ['./googlemap.component.scss'],
  template: `
    <ngui-map center="India" class="map" [fullscreenControl]="true" [scaleControl]="true"
    scrollwheel="true">
           
   </ngui-map>
   
`,
})
export class GooglemapComponent {
  
}
