const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Create a new story">
        <h4 style={{ color: "white" }}>Begin your story!</h4>
        <form action="/stories" method="POST">
          <input
            type="text" placeholder="Story Title" name="title" className="small-textbox"></input>
          <br />
          <input type="url" placeholder="image URL" name="img" className="small-textbox"></input>
          <br />
          <textarea
            type="text" placeholder="Introduction" name="intro"
          ></textarea>
          <br />
          <textarea
            type="text" placeholder="The Conflict" name="conflict"
          ></textarea>
          <br />
          <textarea
            type="text" placeholder="Turning Point" name="turningPoint"
          ></textarea>
          <br />
          <textarea type="text" placeholder="The End" name="end"></textarea>
          <br />
          <br />
          <input type="submit" value="Submit story" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
