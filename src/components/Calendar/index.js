import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main';
import './calendar.scss';
import  useLaunches  from '../hooks/useLaunches';



const Calendar = () => {

	const { launches } = useLaunches();

	return (
		<>
			<Main name='Календарь SpaceX' />
			<section className="calendar">
				<div className="container">
					<ul className="calendar-list">
						{
							launches.map(item => (
								<li className="calendar-item" key={item.id}>
									<article className="launches">
										<div className="launches-image">
											<img src={item.links.patch.small} alt={item.name} />
										</div>
										<div className="launches-content">
											<h2 className="launches-title">{item.name}</h2>
											<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
										</div>
									</article>
								</li>
							))
						}
						
					</ul>
				</div>
			</section>
		</>
)}

export default Calendar;