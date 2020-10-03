const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {story} = this.props
    return (
      <Layout title="Edit Stories">
        <form action={`/stories/edit/${story._id}?_method=PUT`} method="post">
          <input type="text" value={story.story} placeholder="write your story here" name="story"/>
        <input type="submit" value="edit story"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
