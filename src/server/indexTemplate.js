export default (title, body, initialState) =>
    `<!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
            <title>${title}</title>
            <link rel="stylesheet" type="text/css" href="/css/index.css"/>
    </head>
    <body>
        <div id="root">${body}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/js/index.bundle.js"></script>
    </body>
    </html>`;