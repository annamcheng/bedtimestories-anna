const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {story} = this.props
    return (
      <Layout title="Edit my story">
        <form action={`/stories/edit/${story._id}?_method=PUT`} method="post">
          <div style={{ color: "white" }}>Image: </div>
          <input type="url" name="img" defaultValue={story.img} className="small-textbox" />
          <br />
          <div style={{ color: "white" }}>Title: </div>
          <input type="text" name="title" defaultValue={story.title} className="small-textbox" />
          <br />
          <div style={{ color: "white" }}>Intro: </div>
          <textarea type="text" name="intro" defaultValue={story.intro} />
          <br />
          <div style={{ color: "white" }}>Conflict: </div>
          <textarea type="text" name="conflict" defaultValue={story.conflict} />
          <br />
          <div style={{ color: "white" }}>Turning point: </div>
          <textarea
            type="text"
            name="turningPoint"
            defaultValue={story.turningPoint}
          />
          <br />
          <div style={{ color: "white" }}>End: </div>
          <textarea type="text" name="end" defaultValue={story.end} />
          <br /><br />
          <input type="submit" value="Submit Changes" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
