import React from "react";
import "./Massages.css";

const Massages = (props) => {
	return (
		<div className="massage__menu">
			<div className="user__icon"><img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFD32s4DC5OzOkJvpESAczsS7BsoFhccBn8A&usqp=CAU://banner2.cleanpng.com/20180315/hfw/kisspng-avatar-computer-icons-blog-clip-art-preacher-cliparts-5aaaeb4f484a38.0982948015211507992961.jpg" /></div>
			<div className="user__massage">
				<p>{props.massageDialogs}</p>
			</div>
		</div>
	)
};

export default Massages;