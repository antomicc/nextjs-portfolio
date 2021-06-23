const Card = ({ img, title, text }) => {
	return (
		<>
			<div className='card'>
				<div className='icon'>
					<img src={img} alt={title} />
				</div>
				<h3> {title} </h3>
				<p> {text} </p>
			</div>
		</>
	);
};

export default Card;
