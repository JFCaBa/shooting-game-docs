document.addEventListener('DOMContentLoaded', function() {
    // Add copy button to code blocks
    document.querySelectorAll('pre > code').forEach(function(codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(function() {
                button.textContent = 'Copied!';
                setTimeout(function() {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
        
        const pre = codeBlock.parentNode;
        pre.style.position = 'relative';
        pre.appendChild(button);
    });

    // Add anchor links to headers
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(header) {
        if (header.id) {
            const anchor = document.createElement('a');
            anchor.className = 'header-link';
            anchor.href = '#' + header.id;
            anchor.innerHTML = '#';
            header.appendChild(anchor);
        }
    });
});