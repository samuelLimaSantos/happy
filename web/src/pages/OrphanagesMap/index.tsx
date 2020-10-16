import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import mapMarkerImg from '../../assets/marker.svg';
import {
  Container,
  SideBar,
  CreateOrphanageButton,
  MoreDetailsButton,
} from './styles';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Marcador happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </SideBar>

      <Map
        center={[-7.9974, -34.8731]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
          zIndex: 5,
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker position={[-7.9974, -34.8731]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={24}>
            Lar das meninas
            <MoreDetailsButton to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </MoreDetailsButton>
          </Popup>
        </Marker>
      </Map>

      <CreateOrphanageButton to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanageButton>
    </Container>
  );
};

export default OrphanagesMap;
