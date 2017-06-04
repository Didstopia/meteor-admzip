# AdmZip

[![Build Status](https://travis-ci.org/Didstopia/meteor-admzip.svg)](https://travis-ci.org/Didstopia/meteor-admzip)

Provides easy access to AdmZip.

## Usage

Create a ZIP file from a single file synchronously:
```js
createZipFromFile("thing.txt", "something.zip");
```

Create a ZIP file from a single file asynchronously:
```js
createZipFromFile("thing.txt", "something.zip", function(error)
{
    if (error) console.log("Error creating ZIP file: " + error);
});
```

Create ZIP file from multiple files synchronously:
```js
createZipFromFiles([ "this.txt", "that.txt" ], "something.zip");
```

Create ZIP file from multiple files asynchronously:
```js
createZipFromFiles([ "this.txt", "that.txt" ], "something.zip", function(error)
{
    if (error) console.log("Error creating ZIP file: " + error);
});
```

Extract a ZIP file synchronously (from path, to path, [default: true] overwrite)
```js
extractZip("something.zip", "some/folder");
```

Extract a ZIP file asynchronously (from path, to path, [default: true] overwrite, callback):
```js
extractZipAsync("something.zip", "some/folder", function(error)
{
	if (error) console.log("Error extracting ZIP file: " + error);
});
```

## Testing locally

Run the following command to start testing:
```sh
meteor test-packages ./
```

Next, simply navigate to [localhost:3000](http://localhost:3000) to view the test interface.