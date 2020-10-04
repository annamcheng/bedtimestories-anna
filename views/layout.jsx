const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Lily+Script+One&family=Petit+Formal+Script&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
            crossorigin="anonymous"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <nav class="navbar navbar-default navbar-static-top  ">
              <div class="container">
                <ul class="nav nav-pills">
                  <li role="presentation" class="active">
                    <a href="/">Home</a>
                  </li>
                  <li role="presentation">
                    <a href="/auth/signup">Sign up</a>
                  </li>
                  <li role="presentation">
                    <a href="/auth/login">Login</a>
                  </li>
                  <li role="presentation">
                    <a href="/auth/logout">Logout</a>
                  </li>

                </ul>
              </div>
            </nav>
            <h1>{this.props.title}</h1>
          </header>
          <main>{this.props.children}</main>
          <footer id="footer">
            <p style={{ color: "lightgrey", fontSize: "11px" }}>
              Copyright &copy; 2020 Created by&nbsp;
             <a href="https://github.com/annamcheng" target="_blank" id="amc" style={{ fontSize: "11px" }}>
                Anna M Cheng
              </a>. All Rights Reserved
            </p>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;