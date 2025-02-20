/**
 * @module Link/const
 * @description
 * A set of constants that facilitate readability regarding links.
 */
/**
 * @typedef {Object} LINE_TYPES
 * @property {string} STRAIGHT - a straight line.
 * @property {string} CURVE_SMOOTH - a slight curve between two nodes
 * @property {string} CURVE_FULL - a semicircumference trajectory unites source and target nodes.
 * @memberof Link/const
 */
const LINE_TYPES = {
  STRAIGHT: "STRAIGHT",
  CURVE_SMOOTH: "CURVE_SMOOTH",
  CURVE_FULL: "CURVE_FULL",
};

// Offset, in pixels, to slightly shift the line by to prevent collision between links in opposite directions.
const LINE_POS_OFFSET = 3;

export { LINE_TYPES, LINE_POS_OFFSET };
