import React, {Component} from "react";
import {SectionWrap} from "../../globals/Section";
import {ListButton} from "../../globals/ListStyle";
import Tag from "./Tag";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {tag} from "../../../redux/actions/tags.action";
import {getMultipleTag} from "../../../redux/actions/general.action";

class TagData extends Component {
	componentDidMount() {
		this.props.dispatch(tag());
	}

	getCaption = (id) => {
		this.props.dispatch(getMultipleTag(id)).then((res) => {
			window.scroll({
				top: 550,
				behavior: "smooth",
			});
		});
	};

	render() {
		const {tag} = this.props;

		return (
			<SectionWrap>
				<h4 style={{textAlign: "center", fontFamily: "Cera Medium"}}>
					Select tags to get captions
				</h4>
				<ListButton loading={this.props.loading}>
					{this.props.loading ? (
						<div style={{textAlign: "center"}}>Loading ....</div>
					) : (
						tag.map((tag) => {
							return <Tag key={Math.random()} tagline={tag} getCap={this.getCaption} />;
						})
					)}
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

const mapStateToProps = ({tag}) => ({
	tag: tag.tags,
	loading: tag.loading,
});

export default connect(mapStateToProps)(TagData);
