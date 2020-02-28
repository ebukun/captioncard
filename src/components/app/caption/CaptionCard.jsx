import React from "react";
import styled from "styled-components";
import { media, setColor } from "../../globals/Styles";
import SkeletonLine from "../../globals/Skeleton";
import PropTypes from "prop-types";

const CaptionCard = ({ cap, loading }) => {
  if (loading) {
    return (
      <CaptionBox>
        <section>
          <div className="caption-card">
            <SkeletonLine />
          </div>
        </section>
      </CaptionBox>
    );
  }

  return (
    <CaptionBox>
      <section>
        <div className="caption-card">
          <p>{cap}</p>
        </div>
      </section>
    </CaptionBox>
  );
};

const CaptionBox = styled.div`
  background: ${setColor.mainGrey};
  color: ${setColor.primaryColor};
  margin-bottom: 10px;
  text-align: center;
  padding: 80px 70px;
  border-radius: 1rem;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  p {
    font-size: 12px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
    text-transform: capitalize;
    color: ${setColor.mainWhite};
  }

  ${media.tablet`
      p {
    text-align:center;
  }

  `};

  &:hover {
    box-shadow: 0 10px 60px 0 rgba(71, 74, 182, 0.16);
    transform: translateY(-10px);
  }
`;

CaptionCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  cap: PropTypes.string.isRequired
};

export default CaptionCard;
