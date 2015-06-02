AdmZip = Npm.require('adm-zip');

// Create a new ZIP file
createZipFromFile = function(fromPath, toPath)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	zip.addLocalFile(fromPath);
	zip.writeZip(toPath);
}

// Create a new ZIP file from several files
createZipFromFiles = function(filePaths, toPath)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	for (var filePath in filePaths)
	{
		zip.addLocalFile(filePath);
	}
	zip.writeZip(toPath);
}

// Read and extract the ZIP file
extractZip = function(fromPath, toPath)
{
	var zip = new AdmZip(fromPath);	
	zip.extractAllTo(toPath, true);
}
