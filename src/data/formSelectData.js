// Grad Filter
export const cities = [
	'Sarajevo',
	'Banja Luka',
	'Tuzla',
	'Mostar',
	'Bihac',
	'Zenica',
	'Doboj',
	'Prijedor',
	'Vlasenica',
	'Brcko',
	'Trebinje',
	'Bijeljina',
	'Gradačac',
	'Kakanj',
	'Kalesija',
	'Kladanj',
	'Konjic',
	'Livno',
	'Modrica',
	'Mrkonjic Grad',
	'Neum',
	'Odžak',
	'Pale',
	'Posusje',
	'Prnjavor',
	'Rogatica',
	'Srebrenica',
	'Teslic',
	'Travnik',
	'Višegrad'
];

// Godište Filter
export const yearType = [];
let currentYear = new Date().getFullYear();
// Loop to get years
for (let year = 1980; year <= currentYear; year++) {
	yearType.push(year);
}

// Gorivo Filter
export const fuelType = [ 'Dizel', 'Benzin', 'Plin', 'Hibrid', 'Elektro' ];

// Kubikaza
export const cubicType = [];
// Loop to get cubics
for (let cubic = 0.6; cubic <= 7.5; cubic += 0.1) {
	cubicType.push(cubic.toFixed(1));
}

// Vlasništvo
export const ownerShipType = [ 'Domaće tablice', 'Strane tablice', 'Odjavljen', 'Na ime kupca' ];

// Klima
export const climateType = [ 'Automatska', 'Manuelna', 'Nema klimu' ];

// Mjenjac
export const gearType = [ 'Manuelni', 'Polu-automatski', 'Automatski', 'CVT' ];

// Auta Filter
export const cars = [
	{
		name: 'Toyota',
		models: [
			'Corolla',
			'Camry',
			'Prius',
			'RAV4',
			'Tacoma',
			'Highlander',
			'4Runner',
			'Land Cruiser',
			'Avalon',
			'Yaris'
		]
	},
	{
		name: 'Audi',
		models: [
			'Audi A3',
			'Audi A4',
			'Audi A5',
			'Audi A6',
			'Audi A7',
			'Audi A8',
			'Audi Q3',
			'Audi Q5',
			'Audi Q7',
			'Audi Q8',
			'Audi TT',
			'Audi R8',
			'Audi RS 3',
			'Audi RS 5',
			'Audi RS 7',
			'Audi S3',
			'Audi S4',
			'Audi S5',
			'Audi S6',
			'Audi S7',
			'Audi e-tron',
			'Audi e-tron Sportback',
			'Audi e-tron GT',
			'Audi e-tron GT RS',
			'Audi Q2',
			'Audi Q4 e-tron',
			'Audi Q4 e-tron Sportback',
			'Audi Q4 e-tron GT',
			'Audi Q4 e-tron GT RS',
			'Audi Q6 e-tron',
			'Audi Q6 e-tron Sportback',
			'Audi Q6 e-tron GT',
			'Audi Q6 e-tron GT RS',
			'Audi E-Tron Vision Gran Turismo',
			'Audi PB18 e-tron'
		]
	},
	{
		name: 'VW',
		models: [
			"Arteon",
			"Atlas",
			"Golf",
			"GTI",
			"Jetta",
			"Passat",
			"Polo",
			"Tiguan",
			"Touareg"
		]
	}
];

// Emisioni standard
export const standards = [ 'Euro1', 'Euro2', 'Euro3', 'Euro4', 'Euro5', 'Euro6' ];

// Broj brzina mjenjaca
export const gearNumShifts = [];

for (let gearShift = 1; gearShift <= 10; gearShift++) {
	gearNumShifts.push(gearShift);
}

// Broj vrata
export const numberOfDors = [ '2/3', '4/5' ];

// Strana volana
export const steeringSide = [ 'Lijeva', 'Desna' ];

// Boja spoljasnosti
export const outsideColor = [
	'Bež',
	'Bijela',
	'Crna',
	'Crvena',
	'Ljubicasta',
	'Narandzasta',
	'Siva',
	'Plava',
	'Smeđa',
	'Srebrena',
	'Zelena',
	'Zlatna',
	'Žuta'
];

// Oštecenje
export const damages = [ 'Da', 'Ne' ];

// Karoserija
export const bodys = [
	'Limuzina',
	'Malo auto',
	'Karavan',
	'Kombi',
	'Terenac',
	'Kabriolet',
	'Sportski/Kupe',
	'Off-road',
	'Caddy',
	'Pick-Up',
	'Oldtimer',
	'Ostalo'
];

// Pogon
export const drives = [ 'Prednji', 'Zadnji', '4x4' ];

// Sjedeca mjesta
export const numOfSittingPlaces = [];
// Loop to get number of sitting places
for (let sittingPlace = 1; sittingPlace <= 8; sittingPlace++) {
	numOfSittingPlaces.push(sittingPlace);
}

// OSTALE INFORMACIJE
export const row_one = [
	{
		id: 'metalik_boja',
		name: 'Metalik boja',
	},
	{
		id: 'parking_senzori',
		name: 'Parking senzori',
	},
	{
		id: 'kamera',
		name: 'Kamera',
	},
	{
		id: 'xenon',
		name: 'Xenon',
	},
	{
		id: 'led_zadnja_svjetla',
		name: 'Led zadnja svijetla',
	},
	{
		id: 'vazdusno_vjesanje',
		name: 'Vazdušno vješanje',
	},
	{
		id: 'el_sjediste',
		name: 'El. sjedišta',
	},
	{
		id: 'naslon_za_ruku',
		name: 'Naslon za ruku',
	},
	{
		id: 'sportsko_vjesanje',
		name: 'Sportsko vješanje',
	},
	{
		id: 'paljenje_bez_kljuca',
		name: 'Paljenje bez ključa',
	},
	{
		id: 'grijanje_sjedista',
		name: 'Grijanje sjedišta',
	},
	{
		id: 'torba_za_skije',
		name: 'Torba za skije'
	}
];

export const row_two = [
	{
		id: 'led_prednja_svjetla',
		name: 'Led prednja svijetla',
	},
	{
		id: 'tempomat',
		name: 'Tempomat',
	},
	{
		id: 'alu_felge',
		name: 'Alu. felge',
	},
	{
		id: 'multimedija',
		name: 'Multimedija',
	},
	{
		id: 'volan_drvo_koza',
		name: 'Volan - drvo/koža',
	},
	{
		id: 'daljinsko_zakljucavanje',
		name: 'Daljinsko zaključavanje',
	},
	{
		id: 'webasto',
		name: 'Webasto',
	},
	{
		id: 'djecije_sjediste',
		name: 'Dječije sjedište',
	},
	{
		id: 'servo_volan',
		name: 'Servo volan',
	},
	{
		id: 'touch_screen',
		name: 'Touch screen',
	},
	{
		id: 'multi_funkcionalni_volan',
		name: 'Multi-funkcionalni volan',
	},
	{
		id: 'senzor_za_kišu',
		name: 'Senzor za kišu',
	},
];

export const row_three = [
	{
		id: 'dpf_filter',
		name: 'DPF filter',
	},
	{
		id: 'panorama_krov',
		name: 'Panorama krov',
	},
	{
		id: 'navigacija',
		name: 'Navigacija',
	},
	{
		id: 'glasovne_komande',
		name: 'Glasovne komande',
	},
	{
		id: 'grijanje_volana',
		name: 'Grijanje volana',
	},
	{
		id: 'bluetooth',
		name: 'Bluetooth',
	},
	{
		id: 'start_stop',
		name: 'Start-stop',
	},
	{
		id: 'el_gepek',
		name: 'El. gepek',
	},
	{
		id: 'šiber',
		name: 'Šiber',
	},
	{
		id: 'kuka_za_vucu',
		name: 'Kuka za vuču',
	},
	{
		id: 'kozni_volan',
		name: 'Kožni volan',
	},
	{
		id: 'svjetla_za_maglu',
		name: 'Svjetla za maglu',
	},
];

export const row_four = [
	{
		id: 'automatsko_parkiranje',
		name: 'Automatsko parkiranje',
	},
	{
		id: 'dnevna_svjetla',
		name: 'Dnevna svjetla',
	},
	{
		id: 'ventilacija_sjedista',
		name: 'Ventilacija sjedišta',
	},
	{
		id: 'sjedista_podesiva_po_visini',
		name: 'Sjedišta podesiva po visini',
	},
	{
		id: 'sportska_sjedista',
		name: 'Sportska sjedišta',
	},
	{
		id: 'usb',
		name: 'Usb',
	},
	{
		id: 'el_podizaci',
		name: 'El. podizači',
	},
	{
		id: 'dvd_tv',
		name: 'Dvd/tv',
	},
	{
		id: 'masazna_sjedista',
		name: 'Masažna sjedišta',
	},
	{
		id: 'ambijentalno_osvjetljenje',
		name: 'Ambijentalno osvjetljenje',
	},
	{
		id: 'el_retrovizori',
		name: 'El. retrovizori',
	},
	{
		id: 'radio_kastofon',
		name: 'Radio/kasetofon',
	},
];
