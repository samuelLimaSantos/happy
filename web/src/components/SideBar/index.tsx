import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../../assets/marker.svg';
import { SideBar } from './styles';

const SideBarComponent: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <SideBar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </SideBar>
  );
};

export default SideBarComponent;
