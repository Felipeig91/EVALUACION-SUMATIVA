document.addEventListener("DOMContentLoaded", () => {
	const searchInput = document.getElementById("search-input");
	const searchButton = document.getElementById("search-btn");
	const suggestionsBox = document.getElementById("search-suggestions");

	if (!searchInput || !searchButton || !suggestionsBox) {
		return;
	}

	const availableServices = [
		{
			title: "Consultorios disponibles",
			keywords: [
				"consultorio",
				"consultorios",
				"centro medico",
				"centro medico puerto varas",
				"salud",
			],
			url: "html/servicios/consultorio-puerto-varas.html",
		},
		{
			title: "Oficina de Bienestar Social",
			keywords: ["bienestar", "oficina social", "ayuda social", "apoyo social"],
			url: "html/servicios/oficina-bienestar-social.html",
		},
		{
			title: "Cancha Deportiva Comunitaria",
			keywords: ["cancha", "deportes", "futbol", "recreacion"],
			url: "html/servicios/cancha-deportiva-comunitaria.html",
		},
		{
			title: "Centro Educativo Comunitario",
			keywords: ["centro educativo", "educacion", "talleres", "cursos"],
			url: "html/servicios/centro-educativo-comunitario.html",
		},
		{
			title: "Clinica Dental Municipal",
			keywords: ["clinica dental", "dental", "odontologia", "dentista"],
			url: "html/servicios/clinica-dental-municipal.html",
		},
		{
			title: "Farmacia Comunitaria",
			keywords: ["farmacia", "medicamentos", "remedios", "salud"],
			url: "html/servicios/farmacia-comunitaria.html",
		},
		{
			title: "Taller Mecanico",
			keywords: ["taller", "mecanico", "auto", "vehiculo", "reparacion"],
			url: "html/servicios/taller-mecanico.html",
		},
		{
			title: "Peluqueria Local",
			keywords: ["peluqueria", "cabello", "corte", "belleza"],
			url: "html/servicios/peluqueria-local.html",
		},
		{
			title: "Ferreteria Alerce",
			keywords: ["ferreteria", "alerce", "herramientas", "materiales"],
			url: "html/servicios/ferreteria-alerce.html",
		},
		{
			title: "Floreria Puerto Montt",
			keywords: ["floreria", "flores", "ramos", "puerto montt"],
			url: "html/servicios/floreria-puerto-montt.html",
		},
	];

	const normalizeText = (text) =>
		text
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.trim();

	const getMatches = (query) => {
		const normalizedQuery = normalizeText(query);

		if (!normalizedQuery) {
			return [];
		}

		return availableServices.filter((service) =>
			service.keywords.some((keyword) =>
				normalizeText(keyword).includes(normalizedQuery),
			),
		);
	};

	const hideSuggestions = () => {
		suggestionsBox.innerHTML = "";
		suggestionsBox.classList.add("d-none");
	};

	const showSuggestions = (results) => {
		if (!results.length) {
			suggestionsBox.innerHTML =
				'<button type="button" class="list-group-item list-group-item-action disabled">No encontramos resultados para esa búsqueda</button>';
			suggestionsBox.classList.remove("d-none");
			return;
		}

		suggestionsBox.innerHTML = "";

		results.forEach((service) => {
			const link = document.createElement("a");
			link.href = service.url;
			link.className = "list-group-item list-group-item-action";
			link.textContent = service.title;
			suggestionsBox.appendChild(link);
		});

		suggestionsBox.classList.remove("d-none");
	};

	const handleSearch = () => {
		const results = getMatches(searchInput.value);

		if (results.length > 0) {
			window.location.href = results[0].url;
			return;
		}

		showSuggestions([]);
	};

	searchInput.addEventListener("input", () => {
		const results = getMatches(searchInput.value);

		if (!searchInput.value.trim()) {
			hideSuggestions();
			return;
		}

		showSuggestions(results);
	});

	searchInput.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSearch();
		}
	});

	searchButton.addEventListener("click", handleSearch);

	document.addEventListener("click", (event) => {
		if (
			!suggestionsBox.contains(event.target) &&
			event.target !== searchInput &&
			event.target !== searchButton
		) {
			hideSuggestions();
		}
	});
});
