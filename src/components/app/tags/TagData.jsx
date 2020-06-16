import React, { Component } from "react";
import { SectionWrap } from "../../globals/Section";
import { ListButton } from "../../globals/ListStyle";
import Tag from "./Tag";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { tag } from "../../../redux/actions/tags.action";
import { getMultipleTag } from "../../../redux/actions/general.action";
import Spinner from "../util/Spinner";

class TagData extends Component {
  componentDidMount() {
    this.props.dispatch(tag());
  }

  getCaption = (id) => {
    window.scroll({
      top: 500,
      behavior: "smooth",
    });
    this.props.dispatch(getMultipleTag(id));
  };

  render() {
    const { tag } = this.props;
    let data = null;

    if (this.props.loading) {
      data = (
        <div>
          <Spinner />
        </div>
      );
    }

    return (
      <SectionWrap>
        <h4 style={{ textAlign: "center", fontFamily: "Cera Medium" }}>Select tags to get captions</h4>
        <ListButton>
          {data === null
            ? tag.map((tag) => {
                return <Tag key={Math.random()} tagline={tag} getCap={this.getCaption} />;
              })
            : data}
        </ListButton>
      </SectionWrap>
    );
  }
}

TagData.propTypes = {
  tag: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getMultipleTag: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tag }) => ({
  tag: tag.tags,
  loading: tag.loading,
});

export default connect(mapStateToProps)(TagData);
