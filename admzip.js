AdmZip = Npm.require('adm-zip');

// Create a new ZIP file
createZipFromFile = function(fromPath, toPath)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	zip.addLocalFile(fromPath);
	zip.writeZip(toPath);
}

// Create a new ZIP file asynchronously
createZipFromFileAsync = function(fromPath, toPath, callback)
{
	// Validate callback
	if (!callback)
		throw new Meteor.Error("createZipFromFilesAsync() requires a callback.");

	// Create a new ZIP file
	var zip = new AdmZip();
	zip.addLocalFile(fromPath);
	zip.writeZip(toPath, Meteor.bindEnvironment(callback));
}

// Create a new ZIP file from several files
createZipFromFiles = function(filePaths, toPath)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	for (var i in filePaths)
		zip.addLocalFile(filePaths[i]);
	zip.writeZip(toPath);
}

// Create a new ZIP file from several files asynchronously
createZipFromFilesAsync = function(filePaths, toPath, callback)
{
	// Validate callback
	if (!callback)
		throw new Meteor.Error("createZipFromFilesAsync() requires a callback.");

	// Create a new ZIP file
	var zip = new AdmZip();
	for (var i in filePaths)
		zip.addLocalFile(filePaths[i]);
	zip.writeZip(toPath, Meteor.bindEnvironment(callback));
}

// Read and extract the ZIP file
extractZip = function(fromPath, toPath, overwrite)
{
	var zip = new AdmZip(fromPath);	
		zip.extractAllTo(toPath, overwrite || true);
}

// Read and extract the ZIP file asynchronously
extractZipAsync = function(fromPath, toPath, overwrite, callback)
{
	// Validate callback
	if (!callback || typeof overwrite === 'function')
	{
		if (typeof overwrite === 'function')
		{
			callback = overwrite;
			overwrite = true;
		}
		else throw new Meteor.Error("extractZipAsync() requires a callback.");
	}

	var zip = new AdmZip(fromPath);	
	zip.extractAllToAsync(toPath, overwrite || true, Meteor.bindEnvironment(callback));
}
