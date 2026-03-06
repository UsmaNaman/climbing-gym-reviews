'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { GymWithStats } from '@/lib/queries'
import { gymCoordinates } from '@/lib/gymCoordinates'

// Fix Leaflet's broken default icon paths in webpack
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const typeColour: Record<string, string> = {
  bouldering: '#f97316',
  lead: '#60a5fa',
  both: '#34d399',
}

function makeIcon(type: string) {
  const colour = typeColour[type] || '#f97316'
  return L.divIcon({
    className: '',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
    html: `<div style="
      width:14px;height:14px;
      background:${colour};
      border:2px solid white;
      border-radius:50%;
      box-shadow:0 2px 6px rgba(0,0,0,0.5);
    "></div>`,
  })
}

export default function GymMap({ gyms }: { gyms: GymWithStats[] }) {
  const gymsWithCoords = gyms.filter(g => gymCoordinates[g.name])

  return (
    <MapContainer
      center={[51.505, -0.12]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {gymsWithCoords.map(gym => {
        const coords = gymCoordinates[gym.name]
        return (
          <Marker key={gym.id} position={coords} icon={makeIcon(gym.type)}>
            <Popup className="gym-popup">
              <div style={{ fontFamily: 'sans-serif', minWidth: '160px' }}>
                <p style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.05em', margin: '0 0 4px 0', color: '#18181b' }}>
                  {gym.name}
                </p>
                <p style={{ fontSize: '11px', color: '#71717a', margin: '0 0 8px 0' }}>
                  {gym.area}
                </p>
                {gym.avg_rating && (
                  <p style={{ fontSize: '11px', color: '#f97316', fontWeight: 700, margin: '0 0 8px 0' }}>
                    {'★'.repeat(Math.round(gym.avg_rating))}{'☆'.repeat(5 - Math.round(gym.avg_rating))} {gym.avg_rating.toFixed(1)}
                  </p>
                )}
                <a
                  href={`/gyms/${gym.id}`}
                  style={{ fontSize: '11px', fontWeight: 700, color: '#f97316', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                >
                  View gym →
                </a>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
