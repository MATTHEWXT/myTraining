import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
	return (
		<div className='nav__wrapper'>
			<ul>
				<li><NavLink to="/Content">профиль</NavLink></li>
				<li><NavLink to="#">новости</NavLink></li>
				<li><NavLink to="/Dialogs">сообщения</NavLink></li>
				<li><NavLink to="#">музыка</NavLink></li>
				<li><NavLink to="#">видео</NavLink></li>
				<li><NavLink to="#">популярное</NavLink></li>
				<li><NavLink to="#">игры</NavLink></li>
			</ul>
		</div>
	)
};

export default Nav;