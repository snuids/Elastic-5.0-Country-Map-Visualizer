module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/jvectormapcountry/jvector_map_country_vis']
		}
	});
};
