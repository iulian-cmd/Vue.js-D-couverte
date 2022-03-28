<template>
  <div>
    <div>
      <p>
        First marker is placed at  {{ withPopup1.lat }},
        {{ withPopup1.lng }}
      </p>
      <p>
        Second marker is placed at {{ withPopup2.lat }},
        {{ withPopup2.lng }}
      </p>
      <p>
        Third marker is placed at {{ withTooltip.lat }},
        {{ withTooltip.lng }}
      </p>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <button @click="showLongText">Toggle long popup</button>
      <button @click="showMap = !showMap">Toggle map</button>
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 60vh; width: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="withPopup1">
        <l-popup>
          <div @click="innerClick">
           
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>

      <l-marker :lat-lng="withPopup2">
        <l-popup>
          <div @click="innerClick">
          
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>

      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
         
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
} from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    Map,
  },
  data() {
    return {
     zoom: 15,
      center: latLng(45.5662672, 5.9203636),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup1: latLng(45.5662672, 5.9203636),
      withPopup2: latLng(45.7, 5.9203636),
      withTooltip: latLng(45.9, 5.9203636),
      currentZoom: 1,
      currentCenter: latLng(45.5662672, 5.9203636),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Impérial Palace");
    },
  },
};
</script>