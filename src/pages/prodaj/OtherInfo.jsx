import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { standards, gearNumShifts, numberOfDors, steeringSide, outsideColor, damages, bodys, drives, numOfSittingPlaces } from "../../data/formSelectData";

export const OtherInfo = () => {
	const { handleCarFormChange } = useContext(AppContext);

	return (
		<div className="other-info">
			<h2>Ostale informacije</h2>
			<div className="form-container">
				{/* Kilovati */}
				<div className="input-container">
					<label>Kilovati</label>
					<input type="number" id="kilovati" onChange={handleCarFormChange} placeholder="Kilovati" />
				</div>
				{/* Emisioni standard */}
				<div className="input-container">
					<label>Emisioni standard</label>
					<select id="standard" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{standards.map((standard, index) => <option key={index} value={standard}>{standard}</option>)}
					</select>
				</div>

				{/* Broj brzina mjenjača */}
				<div className="input-container">
					<label>Broj brzina mjenjača</label>
					<select id="broj_brzina" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{gearNumShifts.map((gearNum, index) => <option key={index} value={gearNum}>{gearNum}</option>)}
					</select>
				</div>

				{/* Broj vrata */}
				<div className="input-container">
					<label>Broj vrata</label>
					<select id="broj_vrata" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{numberOfDors.map((numDoor, index) => <option key={index} value={numDoor}>{numDoor}</option>)}
					</select>
				</div>

				{/* Strana volana */}
				<div className="input-container">
					<label>Strana volana</label>
					<select id="strana_volana" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{steeringSide.map((side, index) => <option key={index} value={side}>{side}</option>)}
					</select>
				</div>

				{/* Boja spoljašnosti */}
				<div className="input-container">
					<label>Boja spoljašnosti</label>
					<select id="boja" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{outsideColor.map((color, index) => <option key={index} value={color}>{color}</option>)}
					</select>
				</div>

				{/* Oštećenje */}
				<div className="input-container">
					<label>Oštećenje</label>
					<select id="oštecenje" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{damages.map((damage, index) => <option key={index} value={damage}>{damage}</option>)}
					</select>
				</div>

				{/* Karoserija */}
				<div className="input-container">
					<label>Karoserija</label>
					<select id="karoserija" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{bodys.map((body, index) => <option key={index} value={body}>{body}</option>)}
					</select>
				</div>

				{/* Pogon */}
				<div className="input-container">
					<label>Pogon</label>
					<select id="pogon" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{drives.map((drive, index) => <option key={index} value={drive}>{drive}</option>)}
					</select>
				</div>

				{/* Sjedeća mjesta */}
				<div className="input-container">
					<label>Sjedeća mjesta</label>
					<select id="sjedeca_mjesta" onChange={handleCarFormChange}>
						<option value="">Izaberite filter</option>
						{numOfSittingPlaces.map((sittingNum, index) => <option key={index} value={sittingNum}>{sittingNum}</option>)}
					</select>
				</div>
			</div>
		</div>
	);
};
