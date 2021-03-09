import FileSaver from 'file-saver';

// a case when we need to silently download a file using Javascript, and prompt to save it afterwards
function promptToSaveBlob({ content, name, downloadUrl }) {
  if (downloadUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", downloadUrl, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = name;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
    // const iframeId = 'oc-fm--filemanager-download-iframe';
    // let iframeDOMNode = document.getElementById(iframeId);

    // if (!iframeDOMNode) {
    //   iframeDOMNode = document.createElement('iframe');
    //   iframeDOMNode.style.display = 'none';
    //   iframeDOMNode.id = iframeId;
    //   document.body.appendChild(iframeDOMNode);
    // }

    // iframeDOMNode.src = downloadUrl;
  } else {
    const blob = new Blob([content], { type: 'octet/stream' });
    FileSaver.saveAs(blob, name);
  }
}

// a case when we trigger a direct download in browser
// used in google drive' connector
function triggerHiddenForm({ downloadUrl, target = '_self' }) {
  const form = document.createElement("form");
  form.action = downloadUrl;
  form.target = target;
  form.method = 'GET';

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

export {
  promptToSaveBlob,
  triggerHiddenForm
};
