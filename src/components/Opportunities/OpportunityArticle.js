import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RenderShortDate from "../common/RenderShortDate";
import SocialShareButtons from "../common/SocialShareButtons";
import TagLink from "../common/OpportunitiesTagLink";

class OpportunityArticle extends Component {
  renderTags(tags) {
    if (typeof tags !== "undefined") {
      let output = tags.map(t => {
        return <TagLink key={t} tag={t} />;
      });

      return output;
    }
  }

  render() {
    const { title, content, tags } = this.props.opportunityItem[0];

    return (
      <div className="article opportunity" style={{ color: "#9b9c9f" }}>
        <div className="col-12">
          <h3 style={{ color: "white" }} className="card-text title">{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <p className="card-text tags">{this.renderTags(tags)}</p>
          {/* {<SocialShareButtons event={this.props.event} slug={slug} />} */}
        </div>

        <div className="col-12">
          <NavLink className="btn btn-default" style={{ backgroundColor: "#f99b1f", color: "#ffffff", width: "100%", marginTop: "1em" }} to={"/opportunities"}>
            Return to Opportunities List
          </NavLink>
        </div>
      </div>
    );
  }
}

export default OpportunityArticle;
