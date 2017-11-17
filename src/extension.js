window.contentfulExtension.init(extension => {
	let value = extension.field.getValue() || '';
	//
	extension.field.setValue(value);
});