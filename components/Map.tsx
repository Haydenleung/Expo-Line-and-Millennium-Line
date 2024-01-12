import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    Circle,
    CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const expoicon = L.icon({
    iconUrl: "/images/expolocation.png",
    iconAnchor: [10, 10]
})
const mileicon = L.icon({ iconUrl: "/images/milelocation.png", iconAnchor: [10, 10] })

const mileline: [number, number][] = [
    [49.265767, -123.078798],
    [49.262418, -123.068793],
    [49.258930, -123.045286],
    [49.260760, -123.032865],
    [49.264956, -123.013507],
    [49.266384, -123.001664],
    [49.264729, -122.982137],
    [49.259163, -122.963858],
    [49.254618, -122.939039],
    [49.253607, -122.918130],
    [49.248631, -122.896859],
    [49.261426, -122.889868],
    [49.278031, -122.845861],
    [49.277299, -122.828179],
    [49.274416, -122.800292],
    [49.280416, -122.793820],
    [49.285748, -122.791638]
]

const expoline: [number, number][][] = [
    [
        [49.286603, -123.113122],
        [49.285628, -123.119346],
        [49.283170, -123.115675],
        [49.279293, -123.109171],
        [49.273152, -123.100344],
        [49.262418, -123.068793],
        [49.248243, -123.055720],
        [49.244203, -123.045944],
        [49.238405, -123.031806],
        [49.229748, -123.012640],
        [49.225769, -123.003807],
        [49.220063, -122.988428],
        [49.212064, -122.959192],
        [49.200056, -122.948947],
        [49.201418, -122.912623],
        [49.204672, -122.906383],
        [49.204428, -122.874168],
        [49.198916, -122.850601],
        [49.189525, -122.847856],
        [49.182796, -122.844749],
    ],
    [
        [49.204672, -122.906383],

        [49.224651, -122.889394],
        [49.233244, -122.882803],
        [49.248431, -122.896859],
        [49.253407, -122.918130]
    ]
]

const blueOptions = { color: 'blue' }
const yellowOptions = { color: 'black' }

const center: [number, number] = [49.24966, -123.00800]

const Map = () => {
    return (
        <>
            <MapContainer
                style={{ height: "100vh" }}
                center={[49.24966, -123.00934]}
                zoom={12}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://github.com/Haydenleung/Expo-Line-and-Millennium-Line">By Hayden Leung</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Expo Line */}
                <Marker position={[49.286603, -123.113122]} icon={expoicon}>
                    <Popup>Waterfront Station</Popup>
                </Marker>
                <Marker position={[49.285628, -123.119346]} icon={expoicon}>
                    <Popup>Burrard Station</Popup>
                </Marker>
                <Marker position={[49.283170, -123.115675]} icon={expoicon}>
                    <Popup>Granville Station</Popup>
                </Marker>
                <Marker position={[49.279293, -123.109171]} icon={expoicon}>
                    <Popup>Stadium–Chinatown Station</Popup>
                </Marker>
                <Marker position={[49.273152, -123.100344]} icon={expoicon}>
                    <Popup>Main Street–Science World Station</Popup>
                </Marker>
                <Marker position={[49.262418, -123.068793]} icon={expoicon}>
                    <Popup>Commercial–Broadway Station</Popup>
                </Marker>
                <Marker position={[49.248243, -123.055720]} icon={expoicon}>
                    <Popup>Nanaimo Station</Popup>
                </Marker>
                <Marker position={[49.244203, -123.045944]} icon={expoicon}>
                    <Popup>29th Avenue Station</Popup>
                </Marker>
                <Marker position={[49.238405, -123.031806]} icon={expoicon}>
                    <Popup>Joyce–Collingwood Station</Popup>
                </Marker>
                <Marker position={[49.229748, -123.012640]} icon={expoicon}>
                    <Popup>Patterson Station</Popup>
                </Marker>
                <Marker position={[49.225769, -123.003807]} icon={expoicon}>
                    <Popup>Metrotown Station</Popup>
                </Marker>
                <Marker position={[49.220063, -122.988428]} icon={expoicon}>
                    <Popup>Royal Oak Station</Popup>
                </Marker>
                <Marker position={[49.212064, -122.959192]} icon={expoicon}>
                    <Popup>Edmonds Station</Popup>
                </Marker>
                <Marker position={[49.200056, -122.948947]} icon={expoicon}>
                    <Popup>22nd Street Station</Popup>
                </Marker>
                <Marker position={[49.201418, -122.912623]} icon={expoicon}>
                    <Popup>New Westminster Station</Popup>
                </Marker>
                <Marker position={[49.204672, -122.906383]} icon={expoicon}>
                    <Popup>Columbia Station</Popup>
                </Marker>
                <Marker position={[49.204428, -122.874168]} icon={expoicon}>
                    <Popup>Scott Road Station</Popup>
                </Marker>
                <Marker position={[49.198916, -122.850601]} icon={expoicon}>
                    <Popup>Gateway Station</Popup>
                </Marker>
                <Marker position={[49.189525, -122.847856]} icon={expoicon}>
                    <Popup>Surrey Central Station</Popup>
                </Marker>
                <Marker position={[49.182796, -122.844749]} icon={expoicon}>
                    <Popup>King George Station</Popup>
                </Marker>
                <Marker position={[49.224651, -122.889394]} icon={expoicon}>
                    <Popup>Sapperton Station</Popup>
                </Marker>
                <Marker position={[49.233244, -122.882803]} icon={expoicon}>
                    <Popup>Braid Station</Popup>
                </Marker>
                <Marker position={[49.248431, -122.896859]} icon={expoicon}>
                    <Popup>Lougheed Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.253407, -122.918130]} icon={expoicon}>
                    <Popup>Production Way–University Station</Popup>
                </Marker>
                <Polyline pathOptions={blueOptions} positions={expoline} />

                {/* Millennium Line */}
                <Marker position={[49.265767, -123.078798]} icon={mileicon}>
                    <Popup>VCC–Clark Station</Popup>
                </Marker>
                <Marker position={[49.262418, -123.068793]} icon={mileicon}>
                    <Popup>Commercial–Broadway Station</Popup>
                </Marker>
                <Marker position={[49.258930, -123.045286]} icon={mileicon}>
                    <Popup>Renfrew Station</Popup>
                </Marker>
                <Marker position={[49.260760, -123.032865]} icon={mileicon}>
                    <Popup>Rupert Station</Popup>
                </Marker>
                <Marker position={[49.264956, -123.013507]} icon={mileicon}>
                    <Popup>Gilmore Station</Popup>
                </Marker>
                <Marker position={[49.266384, -123.001664]} icon={mileicon}>
                    <Popup>Brentwood Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.264729, -122.982137]} icon={mileicon}>
                    <Popup>Holdom Station</Popup>
                </Marker>
                <Marker position={[49.259163, -122.963858]} icon={mileicon}>
                    <Popup>Sperling–Burnaby Lake Station</Popup>
                </Marker>
                <Marker position={[49.254618, -122.939039]} icon={mileicon}>
                    <Popup>Lake City Way Station</Popup>
                </Marker>
                <Marker position={[49.253607, -122.918130]} icon={mileicon}>
                    <Popup>Production Way–University Station</Popup>
                </Marker>
                <Marker position={[49.248631, -122.896859]} icon={mileicon}>
                    <Popup>Lougheed Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.261426, -122.889868]} icon={mileicon}>
                    <Popup>Burquitlam Station</Popup>
                </Marker>
                <Marker position={[49.278031, -122.845861]} icon={mileicon}>
                    <Popup>Moody Centre Station</Popup>
                </Marker>
                <Marker position={[49.277299, -122.828179]} icon={mileicon}>
                    <Popup>Inlet Centre Station</Popup>
                </Marker>
                <Marker position={[49.274416, -122.800292]} icon={mileicon}>
                    <Popup>Coquitlam Central Station</Popup>
                </Marker>
                <Marker position={[49.280416, -122.793820]} icon={mileicon}>
                    <Popup>Lincoln Station</Popup>
                </Marker>
                <Marker position={[49.285748, -122.791638]} icon={mileicon}>
                    <Popup>Lafarge Lake–Douglas Station</Popup>
                </Marker>
                <Polyline pathOptions={yellowOptions} positions={mileline} />
            </MapContainer>
        </>
    );
};

export default Map;
