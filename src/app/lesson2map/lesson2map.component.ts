import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2map',
  templateUrl: './lesson2map.component.html',
  styleUrls: ['./lesson2map.component.css']
})
export class Lesson2mapComponent implements OnInit {

  /* mymap = L.map('mapid').setView([32.7859, 34.9614], 18);
   OpenStreetMap_layer:L.TileLayer =L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(this.mymap);
//# sourceMappingURL=script.js.map

   googel_layer:L.TileLayer =L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

   google : boolean=false;

  this.mymap.on('mousemove',this.mousemoveFunc)

  this.mymap.on('click',this.mouseclick)


   mousemoveFunc(e: L.MouseEvent){
  document.getElementById('coordinates').innerHTML='lat: ' + Math.round(e.latlng.lat * 10000) / 10000 +'long: ' +Math.round(e.latlng.lng * 10000) / 10000

}


   mouseclick(e: L.MouseEvent){
  if(e.originalEvent.shiftKey){
    this.toggleMaps();

  }
  else{
    L.marker([Math.round(e.latlng.lat * 10000) / 10000, Math.round(e.latlng.lng * 10000) / 10000]).addTo(this.mymap);

  }

   toggleMaps(){
    if(this.google){

      this.mymap.removeLayer(this.googel_layer);
      this.OpenStreetMap_layer.addTo(this.mymap);
    } else {
      this.mymap.removeLayer(this.OpenStreetMap_layer);
      this.googel_layer.addTo(this.mymap);
    }
       this.google = !this.google;
  }
}*/

  constructor() { }

  ngOnInit() {
  }

}
