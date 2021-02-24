import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (

		<div className='header__wrapper'>
			<ul>
				<li><NavLink to="/UsersFind">найти пользователя</NavLink></li>
				<li><NavLink to="https://world-blog.ru/kak-sdelat-pustuyu-ssylku">войти</NavLink></li>
				<li><NavLink to="https://world-blog.ru/kak-sdelat-pustuyu-ssylku">регистрация</NavLink></li>
			</ul>
		</div>

	)
};

export default Header;