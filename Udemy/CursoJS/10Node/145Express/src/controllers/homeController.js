exports.paginaInicial = (request, response) => {
	response.render('index', {
		titulo: 'Este será o titulo da página',
		numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	});
	return;
};


exports.trataPost = (request, response) => {
	response.send(request.body);
	return;
}