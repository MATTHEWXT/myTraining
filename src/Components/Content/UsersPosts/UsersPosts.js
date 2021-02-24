import React from "react";
import "./UsersPosts.css";

const UsersPosts = (props) => {
	return (
		<div className='users__posts'>
			<img alt= 'avatar01' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRykMIUaktluluAmgyRam0dOwH3XHQHiu_fLA&usqp=CAU" />
			<div className="users__comments">
				{props.massagePost}

			</div>
		</div>
	)
};

export default UsersPosts;