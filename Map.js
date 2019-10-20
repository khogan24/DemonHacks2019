import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


const SimpleMap = (props: any) => {
    const [center, setCenter] = useState({lat: 41.8475, lng: -87.6661 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAnQxxGctrgOKXJFJQzbdWRwzEEJKJYtjI' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={41.8475}
            lng={-87.6661}
            name="My Marker"
            color="blue"
        />
        <Marker
            lat={41.8478}
            lng={-87.6658}
            name="My Marker"
            color="blue"
          />
        <Marker
            lat={41.8433}
            lng={-87.6657}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8632}
            lng={-87.6662}
            name="My Marker"
            color="blue"
          />
        <Marker
            lat={41.8616}
            lng={-87.6661}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8575}
            lng={-87.6663}
            name="My Marker"
            color="blue"
          />
        
        
        
        <Marker
            lat={41.8344}
            lng={-87.6655}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8575}
            lng={-87.6663}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8305}
            lng={-87.6656}
            name="My Marker"
            color="blue"
          />
        
         <Marker
            lat={41.8268}
            lng={-87.6655}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8171}
            lng={-87.6652}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8159}
            lng={-87.6650}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8122}
            lng={-87.6651}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8104}
            lng={-87.6650}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8086}
            lng={-87.6648}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8068}
            lng={-87.6649}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8049}
            lng={-87.6647}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.8013}
            lng={-87.6648}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7995}
            lng={-87.6647}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7977}
            lng={-87.6647}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7904}
            lng={-87.6645}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7867}
            lng={-87.6644}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7831}
            lng={-87.6642}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7794}
            lng={-87.6643}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7794}
            lng={-87.6643}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7758}
            lng={-87.6640}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7740}
            lng={-87.6640}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7685}
            lng={-87.6640}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7640}
            lng={-87.6637}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7603}
            lng={-87.6637}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7582}
            lng={-87.6635}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7558}
            lng={-87.6635}
            name="My Marker"
            color="blue"
          />
        
        <Marker
            lat={41.7540}
            lng={-87.6636}
            color="blue"
          />
        
        <Marker
            lat={41.7503}
            lng={-87.6633}
            color="blue"
          />
        
        <Marker
            lat={41.7485}
            lng={-87.6634}
            color="blue"
          />
        
        <Marker
            lat={41.7467}
            lng={-87.6632}
            color="blue"
          />
        
        <Marker
            lat={41.7448}
            lng={-87.6632}
            color="blue"
          />
        
        <Marker
            lat={41.7448}
            lng={-87.6632}
            color="blue"
          />
        
        <Marker
            lat={41.7358}
            lng={-87.6631}
            color="blue"
          />
        
        <Marker
            lat={41.7319}
            lng={-87.6629}
            color="blue"
          />
        
        <Marker
            lat={41.7284}
            lng={-87.6629}
            color="blue"
          />
        
        <Marker
            lat={41.7248}
            lng={-87.6628}
            color="blue"
          />
        
        <Marker
            lat={41.7230}
            lng={-87.6628}
            color="blue"
          />
        
        <Marker
            lat={41.7212}
            lng={-87.6626}
            color="blue"
          />
        
        <Marker
            lat={41.8789}
            lng={-87.6666}
            color="blue"
          />
        
        <Marker
            lat={41.9470}
            lng={-87.6687}
            color="blue"
          />
        
        <Marker
            lat={41.8375}
            lng={-87.6655}
            color="blue"
          />
        
        <Marker
            lat={41.8375}
            lng={-87.6655}
            color="blue"
          />
        
        <Marker
            lat={41.8962}
            lng={-87.6671}
            color="blue"
          />
        
         <Marker
            lat={41.8962}
            lng={-87.6671}
            color="blue"
          />
        
        <Marker
            lat={41.9394}
            lng={-87.6685}
            color="blue"
          />
        
        <Marker
            lat={41.9070}
            lng={-87.6675}
            color="blue"
          />
        
        <Marker
            lat={41.8874}
            lng={-87.6669}
            color="blue"
          />
        
        <Marker
            lat={41.8524}
            lng={-87.6657}
            color="blue"
          />
        
        <Marker
            lat={41.8523}
            lng={-87.6659}
            color="blue"
          />
        
        <Marker
            lat={41.8523}
            lng={-87.6659}
            color="blue"
          />
        
         <Marker
            lat={41.8960}
            lng={-87.6672}
            color="blue"
          />
        
        <Marker
            lat={41.9161}
            lng={-87.6677}
            color="blue"
          />
        
        <Marker
            lat={41.9161}
            lng={-87.6677}
            color="blue"
          />
        
        <Marker
            lat={41.8551}
            lng={-87.6661}
            color="blue"
          />
        
         <Marker
            lat={41.9324}
            lng={-87.6683}
            color="blue"
          />
        
        <Marker
            lat={41.9184}
            lng={-87.6679}
            color="blue"
          />
        
        <Marker
            lat={41.8934}
            lng={-87.6673}
            color="blue"
          />
        
        <Marker
            lat={41.9252}
            lng={-87.6682}
            color="blue"
          />
        
        <Marker
            lat={41.8869}
            lng={-87.6671}
            color="blue"
          />
        
        <Marker
            lat={41.7940}
            lng={-87.6648}
            color="blue"
          />
        
        <Marker
            lat={41.9505}
            lng={-87.6688}
            color="blue"
          />
        
        <Marker
            lat={41.9505}
            lng={-87.6688}
            color="blue"
          />
        
        <Marker
            lat={41.8910}
            lng={-87.6669}
            color="blue"
          />
        
        <Marker
            lat={41.8739}
            lng={-87.6667}
            color="blue"
          />
        
        <Marker
            lat={41.9542}
            lng={-87.6689}
            color="blue"
          />
        
        <Marker
            lat={41.9542}
            lng={-87.6689}
            color="blue"
          />
        
        <Marker
            lat={41.9542}
            lng={-87.6689}
            color="blue"
          />
        
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;