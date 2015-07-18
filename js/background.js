(function() {
    var bgImgs = Math.round((Math.random() * 100)),
        colors = ['#2ecc71', '#3498db', '#f1c40f',
         '#e74c3c', '#1abc9c', '#9b59b6'],
         docFrag = document.createDocumentFragment();
    for(var i=0;i<bgImgs;i+=1) {
        var span = document.createElement('span'),
            rotation = Math.round((Math.random() * 360));
        span.className = 'background-object';
        span.style.cssText = ['background:' + colors[Math.round((Math.random() * 5))]+';',
                 '-ms-transform: rotate('+rotation+'deg);',
                 '-webkit-transform: rotate('+rotation+'deg);',
                 'transform: rotate('+rotation+'deg);'
                ].join(' ');
        docFrag.appendChild(span);
    }
    document.body.appendChild(docFrag);
})();
