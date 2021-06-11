import React from 'react';
import { Circle, Popup } from 'react-leaflet'
import numeral from 'numeral'
const caseTypeColors = {
    cases: {
        hex: '#CC1034',
        multiplier: 800
    },
    recovered: {
        hex: '#7dd71d',


        multiplier: 1200
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000
    }
}

// 
// DESENHA um círculo no mapa
export const showDataOnMap = (data, caseType = "cases") =>
    data.map((country, i) => (
        <Circle
            key={i}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={caseTypeColors[caseType].hex}
            fillColor={caseTypeColors[caseType].hex}
            radius={
                Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier}
        >
            <Popup>
                <div className='popup__container'>
                    <div className="popup__country-flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }} />
                    <div className='popup__country-name'>{country.country}</div>
                    <div className='popup__cases'>Casos:{numeral(country.cases).format("0,0")} </div>
                    <div className='popup__recovered'>Recuperado:{numeral(country.recovered).format("0,0")}</div>
                    <div className='popup__deaths'>Morte:{numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle >
    ))
