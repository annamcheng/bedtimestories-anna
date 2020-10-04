const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {stories} = this.props
    return (
      <Layout title="Bedtime Stories">
        <a href="/stories/new"><button>Create a new story</button></a>
        <ul className="squares">
          {stories.map((story, index) => {
            return (
              <div className="stories">
                <a href={`/stories/${story._id}`}>
                  <li style={{ color: "white" }}>{story.title}</li>
                  <img
                    src={story.img}
                    width="120px"
                    height="100px"
                    className="book-image"
                  />
                </a>
              </div>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;
