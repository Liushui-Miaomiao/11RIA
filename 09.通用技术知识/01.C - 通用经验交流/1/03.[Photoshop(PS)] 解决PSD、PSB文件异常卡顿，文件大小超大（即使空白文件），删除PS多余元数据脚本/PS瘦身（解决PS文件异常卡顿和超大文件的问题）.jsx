function deleteDocumentAncestorsMetadata() {
	
	//String version of the app name
	whatApp = String(app.name);
	
	// Check for photoshop specifically, or this will cause errors
	if(whatApp.search("Photoshop") > 0) { 

		// Function Scrubs Document Ancestors from Files
		if(!documents.length) {
			alert("There are no open documents. Please open a file to run this script.")
			return;
		}

		if (ExternalObject.AdobeXMPScript == undefined) ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
		var xmp = new XMPMeta( activeDocument.xmpMetadata.rawData);

		// Begone foul Document Ancestors!
		xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
		app.activeDocument.xmpMetadata.rawData = xmp.serialize();

	}

}
// Now run the function to remove the document ancestors
deleteDocumentAncestorsMetadata(); 
