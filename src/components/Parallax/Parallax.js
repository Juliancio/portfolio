import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ParticlesBg from "particles-bg";

import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  let windowScrollTop = 1;

  const [transform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}
    >
      {children}
      <ParticlesBg color={"#ffffff"} num={150} type="cobweb" bg={true} />
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
