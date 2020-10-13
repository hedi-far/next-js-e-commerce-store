exports.up = async (sql) => {
	await sql `
	INSERT INTO shoes (
		name,
		description,
		size,
		price,
		image
	) VALUES (
		'Hiking Shoes',
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
		43,
		65,
		'/images/hiking_shoes.jpg'
				);
	
	`;
	};
	
	exports.down = async (sql) => {
		await sql `
		DELETE FROM shoes WHERE name = 'Hiking Shoes':
		`;
		};