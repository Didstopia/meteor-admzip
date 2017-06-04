// TODO: Where are the files being created?
// TODO: We need to cleanup after ourselves

Tinytest.add('AdmZip - Create and Read a ZIP file (single file)', function(test)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");

	// Create a new ZIP file using the text file
	createZipFromFile("test.txt", "test.zip");

	// Read the ZIP file
	var zip = new AdmZip('test.zip');
	var zipEntries = zip.getEntries();

	// Test if the ZIP file was succesfully created/read
	test.length(zipEntries, 1, "ZIP file count was less than 1");
});

Tinytest.addAsync('AdmZip - Create and Read a ZIP file asynchronously (single file)', function(test, completed)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");

	// Create a new ZIP file using the text file
	createZipFromFileAsync("test.txt", "test.zip", function(error)
	{
		test.isTrue(!error, "Error: " + error);
		if (!error)
		{
			// Read the ZIP file
			var zip = new AdmZip('test.zip');
			var zipEntries = zip.getEntries();

			// Test if the ZIP file was succesfully created/read
			test.length(zipEntries, 1, "ZIP file count was less than 1");
		}
		completed();
	});
});

Tinytest.add('AdmZip - Create and Read a ZIP file (multiple files)', function(test)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");
	fs.writeFile("test2.txt", "AdmZip dummy test file 2.");

	// Create a new ZIP file using the text file
	createZipFromFiles(["test.txt", "test2.txt"], "test.zip");

	// Read the ZIP file
	var zip = new AdmZip('test.zip');
	var zipEntries = zip.getEntries();

	// Test if the ZIP file was succesfully created/read
	test.length(zipEntries, 2, "ZIP file count was less than 2");
});

Tinytest.addAsync('AdmZip - Create and Read a ZIP file asynchronously (multiple files)', function(test, completed)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");
	fs.writeFile("test2.txt", "AdmZip dummy test file 2.");

	// Create a new ZIP file using the text file
	createZipFromFilesAsync(["test.txt", "test2.txt"], "test.zip", function(error)
	{
		test.isTrue(!error, "Error: " + error);
		if (!error)
		{
			// Read the ZIP file
			var zip = new AdmZip('test.zip');
			var zipEntries = zip.getEntries();

			// Test if the ZIP file was succesfully created/read
			test.length(zipEntries, 2, "ZIP file count was less than 2");
		}
		completed();
	});
});

Tinytest.add('AdmZip - Extract a ZIP file', function (test)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");

	// Create a new ZIP file using the text file
	createZipFromFile("test.txt", "test.zip");

	// Read and extract the ZIP file
	extractZip('test.zip', 'test/');

	// Test if the extracted file exists
	var fs = Npm.require('fs');
	test.equal(fs.existsSync('test/test.txt'), true, "Test file does not exist, extract failed?");
});

Tinytest.addAsync('AdmZip - Extract a ZIP file asynchronously', function (test, completed)
{
	// Create a simple text file
	var fs = Npm.require('fs');
	fs.writeFile("test.txt", "AdmZip dummy test file.");

	// Create a new ZIP file using the text file
	createZipFromFileAsync("test.txt", "test.zip", function(error)
	{
		test.isTrue(!error, "Error: " + error);
		if (!error)
		{
			// Read and extract the ZIP file
			extractZipAsync('test.zip', 'test/', function(error)
			{
				test.isTrue(!error, "Error: " + error);
				if (!error)
				{
					// Test if the extracted file exists
					var fs = Npm.require('fs');
					test.equal(fs.existsSync('test/test.txt'), true, "Test file does not exist, extract failed?");
				}
				completed();
			});
		}
		else completed();
	});
});
