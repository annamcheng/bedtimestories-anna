const React = require("react");
const Layout = require("../layout.jsx");

class Show extends React.Component {
  render() {
    const { story } = this.props;
    return (
      <Layout>
        <div className="description-container">
          <h1 style={{ textDecoration: "underline" }}>{story.title}</h1>
          <div className="story-body">
            <img src={story.img} height="400px" className="showpg-image" />
            <br />
            <div className="story-container" style={{ color: "white" }}>
              <h3>{story.intro}</h3>
              <h3>{story.conflict}</h3>
              <h3>{story.turningPoint}</h3>
              <h3>{story.end}</h3>
            </div>
          </div>

          <div className="redirect-buttons">
            <form action={`/stories/edit/${story._id}`} method="GET">
              <input type="submit" value="EDIT" className="button"/>
            </form>
            <form action={`/stories/${story._id}?_method=DELETE`} method="POST">
              <input
                type="submit"
                value="DELETE"
                className="button"
                style={{ color: "black" }}
              />
            </form>
            <a href={`/`}>
              <button>HOME</button>
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
