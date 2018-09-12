import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RenderShortDate from "../common/RenderShortDate";
import SocialShareButtons from "../common/SocialShareButtons";
import Sidebar from "./Sidebar";
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
    console.log(this.props.event);
    const { title, slug, start_datetime, content, tags } = this.props.event[0];
    return (
      <div className="event-article" style={{ color: "#9b9c9f" }}>
        <div className="col-12">
          <time>
            <RenderShortDate date={start_datetime} />
          </time>
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <p className="card-text tags">{this.renderTags(tags)}</p>
          {/* {<SocialShareButtons event={this.props.event} slug={slug} />} */}
        </div>
        <Sidebar event={this.props.event} />

        <div className="col-12">
          <NavLink className="btn btn-default" style={{ backgroundColor: "#1b8aba", color: "#ffffff", width: "100%" }} to={"/"}>
            Return to Events List
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Article;
