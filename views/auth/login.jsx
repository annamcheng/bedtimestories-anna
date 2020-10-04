const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username" className="credentials" /><br /><br />
          <input type="text" name="password" placeholder="password" className="credentials" /><br /><br />
          <input type="submit" value="login" className="credentials" />
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
