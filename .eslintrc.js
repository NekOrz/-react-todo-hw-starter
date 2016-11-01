module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"rules": {
		"brace-style": ["error", "stroustrup", {"allowSingleLine": true}],
		"no-console": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	}
};
