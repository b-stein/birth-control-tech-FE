import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const InfoTag = () => {
	return (
		<section className='info-tag'>
			<NavLink 
				className='info'
				activeClassName='info-active'
				to='/info'
			/>
		</section>
	)
}

export default InfoTag;