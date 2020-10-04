const React = require("react");
const Layout = require("./layout");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Bedtime Stories">
        <h2 style={{color: "white"}} className="welcome-pg">Welcome to Bedtime Stories. This is a place where you can create your own stories and store it in your personal gallery. Have fun and let your imagination run wild!</h2>
      </Layout>
    );
  }
}

module.exports = Index;
