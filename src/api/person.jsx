const PersonAPI = {

	persons: [
		{ id: 1, name: "Ben Marper", gender: "M" },
		{ id: 2, name: "Dana Look", gender: "W" },
		{ id: 3, name: "Samantha Misot", gender: "W" },
		{ id: 4, name: "David Wood", gender: "M" },
		{ id: 5, name: "William Parker", gender: "M" },
		{ id: 6, name: "Philipp Forward", gender: "M" }
	],
	all: function() { return this.persons},
	get: function(id) {
		return this.persons.find(p => p.id === id)
	}

}

export default PersonAPI