const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {stories} = this.props
    return (
      <Layout title="My Stories">
        <h1> My Stories</h1>
        <a href="/stories/new"><button>New Story</button></a>
        {stories.map((story) =>
          <div>
          <h2>{story.story}</h2>
        <form action={`/stories/${story._id}?_method=DELETE`} method="POST">
            <input type="submit" value="delete"/>
            </form>
            <form action={`/stories/edit/${story._id}`} method="GET">
              <input type="submit" value="edit" />
            </form>
          </div>
        )}
      </Layout>
    );
  }
}

module.exports = Index;
