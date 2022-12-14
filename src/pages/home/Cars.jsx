import { useContext } from 'react';
import { FaCalendarAlt, FaRoad } from 'react-icons/fa';
import { GiGasPump } from 'react-icons/gi';
import AppContext from '../../context/AppContext';

export const Cars = () => {
    const { carsData } = useContext(AppContext);

	return (
		<div className="cars">
			{carsData &&
				carsData.map((car, index) => (
					<div className="car" key={index}>
						<div className="image-section">
							<img src={car.storageImages[0]} alt="" />
						</div>
						<div className="info-section">
							<h3>{car.naslov_oglasa}</h3>
							<div className="details">
								<span>
									<FaCalendarAlt className="icon" /> {car.godiste}
								</span>
								<span>
									<GiGasPump className="icon" /> {car.gorivo}
								</span>
								<span>
									<FaRoad className="icon" /> {car.kilometraza}
								</span>
							</div>
							<div className="price">
								<span>{car.cijena} KM</span>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
