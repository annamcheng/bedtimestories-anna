const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <form action="/auth/signup" method="post">
          <input type="text" name="username" placeholder="username" className="credentials" /><br /><br />
          <input type="text" name="password" placeholder="password" className="credentials" /><br /><br />
          <input type="submit" value="signup" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
