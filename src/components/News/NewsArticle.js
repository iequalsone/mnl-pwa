import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RenderShortDate from "../common/RenderShortDate";
import SocialShareButtons from "../common/SocialShareButtons";
import TagLink from "../common/TagLink";

class Article extends Component {
  renderTags(tags) {
    if (typeof tags !== "undefined") {
      let output = tags.map(t => {
        return <TagLink key={t} tag={t} />;
      });

      return output;
    }
  }

  render() {
    const { title, pub_date, content, tags } = this.props.newsItem[0];

    return (
      <div className="event-article" style={{ color: "#9b9c9f" }}>
        <div className="col-12">
          <h3 style={{ color: "white" }} className="card-text title">{title}</h3>
          <time>
            <RenderShortDate date={pub_date} />
          </time>
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <p className="card-text tags">{this.renderTags(tags)}</p>
          {/* {<SocialShareButtons event={this.props.event} slug={slug} />} */}
        </div>

        <div className="col-12">
          <NavLink className="btn btn-default" style={{ backgroundColor: "#b6d666", color: "#ffffff", width: "100%", marginTop: "1em" }} to={"/news"}>
            Return to News List
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Article;
