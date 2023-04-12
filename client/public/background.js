// chrome.contextMenus.create({
//     id: "searchOnMyWebsite",
//     title: "Search '%s' on my website",
//     contexts:["selection"],
//   });
  
//   chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     if (info.menuItemId === "searchOnMyWebsite") {
//       var selectedText = info.selectionText;
//       console.log(selectedText);
//     }
//   });

chrome.contextMenus.create({
    id: "searchOnMyWebsite",
    title: "Search '%s' on my website",
    contexts:["selection"],
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchOnMyWebsite") {
      var selectedText = info.selectionText;
      fetch('http://localhost:4000/api/admin/ann', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: selectedText })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error sending request to API server');
        }
      })
      .then(data => {
        // Handle the response data here
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  });
  



chrome.fileSystem.requestFileSystem(function(fs) {
    fs.root.getDirectory('path/to/directory', {}, function(directoryEntry) {
      var directoryReader = directoryEntry.createReader();
      directoryReader.readEntries(function(entries) {
        // iterate through the entries array and do something with each file
        for (var i = 0; i < entries.length; i++) {
          var fileEntry = entries[i];
          // do something with the fileEntry object
        }
      });
    });
  });
  