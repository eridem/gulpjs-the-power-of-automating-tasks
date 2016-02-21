var through = require('through2');

function replaceOnFile(file, from, to) {
	if (file.isNull()) {

	} else if (file.isStream()) {

	}
	else if (file.isBuffer()) {
		var contentAsString = String(file.contents);
		
		var replacementRegex = new RegExp(from, "gi");
		contentAsString = contentAsString.replace(replacementRegex, to);

		file.contents = Buffer(contentAsString);
	}
	return file;
};

module.exports = function (from, to) {
  return through.obj(function (file, encoding, callback) {
    callback(null, replaceOnFile(file, from, to));
  });
};