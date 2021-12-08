mapboxgl.accessToken = 'pk.eyJ1Ijoib2xnYW5kaW5lIiwiYSI6ImNrdnYwcjl4bmJzdzgybnM3aDR1NnY0bDcifQ.bWNB-6Rq40ZoJadasYpmlw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/olgandine/ckvuvbnm13cvw15p6iqiu1fji',
center: [10.1966416, 56.147945], 
zoom: 15,
});

const marker1 = new mapboxgl.Marker({ color: '#b6c69b'})
.setLngLat([10.1966416, 56.147945])
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());
