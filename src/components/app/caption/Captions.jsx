import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { media, setColor } from "../../globals/Styles";
import { caption } from "../../../redux/actions/captions.action";
import * as actionTypes from "../../../redux/constants/actionTypes";
import CaptionCard from "./CaptionCard";
import captiondata from "../../app/util/caption-data";

class Captions extends Component {
  state = {
    captions: captiondata
  };

  componentDidMount() {
    this.props.dispatch(caption());

    this.props.dispatch({ type: actionTypes.CAPTION_MULTIPLE_TAGS_CLEAR });
  }

  render() {
    const { caption, loading } = this.props;

    let data = null;

    if (this.props.captionn.length) {
      data = this.props.captionn.map(caption => {
        return <CaptionCard key={caption.id} cap={caption.caption} loading={loading} />;
      });
    }

    if (loading) {
      data = this.state.captions.map(caption => {
        return <CaptionCard key={caption.id} loading={loading} />;
      });
    }

    return (
      <CaptionWrap>
        <h1>Daily Captions for your soul</h1>
        <CaptionWrapper>
          {data === null
            ? caption.map(caption => {
                return <CaptionCard key={caption.id} cap={caption.caption} loading={loading} />;
              })
            : data}
        </CaptionWrapper>
      </CaptionWrap>
    );
  }
}

const CaptionWrap = styled.div`
  margin-top: 50px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 1.5;
    color: ${setColor.primaryColor};
    font-family: "Cera Medium";
  }
`;

const CaptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
  background: #f5f7fa;

  ${media.tablet`
    margin: 0 20px;
    grid-gap: 5rem;
    padding: 5rem;
  `};
  ${media.phone``};
  ${media.large``};
`;

Captions.propTypes = {
  loading: PropTypes.bool.isRequired,
  caption: PropTypes.array.isRequired,
  captionn: PropTypes.array.isRequired
};

const mapStateToProps = ({ caption, getCaption }) => ({
  caption: caption.captions,
  loading: caption.loading,
  captionn: getCaption.captions
});

export default connect(mapStateToProps)(Captions);
