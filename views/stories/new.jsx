const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Stories">
        <form action="/stories" method="post">
          <input type="text" placeholder="write your new story here" name="story"/>
        <input type="submit" value="create story"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
