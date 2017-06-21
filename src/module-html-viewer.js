export class HtmlViwer {
    constructor(quill){
        this.quill = quill;
        this.toolbar = quill.getModule('toolbar');
        if (typeof this.toolbar != 'undefined')
            this.toolbar.addHandler('htmlViewer', this.htmlViewer);

        var htmlViewerBtns = document.getElementsByClassName('ql-htmlViewer');
        if (htmlViewerBtns) {
            [].slice.call( htmlViewerBtns ).forEach(function ( htmlViewerBtn ) {
                htmlViewerBtn.innerHTML = '[Source]';
                htmlViewerBtn.id="ql-source-btn";
                htmlViewerBtn.style.fontWeight = 'bold';
                htmlViewerBtn.style.width = "80px";
                htmlViewerBtn.parentNode.style.cssText = "float:right;";
            });
        };
    }

    htmlViewer() {
        let quill = this.quill;
        let sourceView = document.getElementById('sourceView');
        if (!sourceView) {
            var txtArea = document.createElement('textarea');
            txtArea.style.cssText = "width: 100%;margin: 0px;background: #eee;box-sizing: border-box;color: #000;font-size: 15px;outline: none;padding: 20px;line-height: 24px;font-family: Consolas, Menlo, Monaco, &quot;Courier New&quot;, monospace;position: absolute;top: 0;bottom: 0;border: none;display:none;overflow-y:scroll;";
            txtArea.id = 'sourceView';
        }
        else{
            txtArea = document.getElementById('sourceView');
        }
        
        let customButton = document.getElementById('ql-source-btn');
        customButton.innerHTML = '[Visual]';

        var myElements = document.querySelectorAll(".ql-formats");
 
        for (var i = 0; i < myElements.length; i++) {
            myElements[i].style.visibility = 'hidden';
        }

        customButton.parentNode.style.visibility = "visible";
        
        let htmlEditor = quill.addContainer('ql-custom');
        htmlEditor.appendChild(txtArea);
        var myEditor = document.querySelector('#quill-editor');
        
        if (txtArea.style.display === 'none') {
            let html = quill.root.innerHTML;
            txtArea.value = html;

          }

        quill.on('text-change', (delta, oldDelta, source) => {
          let html = quill.root.innerHTML;
          txtArea.value = html;
        })

        if (txtArea.style.display === '') {
            let html = txtArea.value;
            this.quill.pasteHTML(html);
            customButton.innerHTML = '[Source]';
            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.visibility = 'visible';
            }
        }
        txtArea.style.display = txtArea.style.display === 'none' ? '' : 'none';
    }  
}

Quill.register('modules/html_viewer', HtmlViwer);

