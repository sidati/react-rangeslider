'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const RangeSlider = React__default['default'].forwardRef((props, rangeSliderRef) => {
  const id = `range-slider-${props.id}`;
  const [progress, setProgress] = React__default['default'].useState(props.initialValue);
  const changeHandler = (ev) => {
    ev.preventDefault();
    const {value} = ev.target;
    setProgress(Number(value));
  };
  React__default['default'].useEffect(() => {
    if (typeof progress === void 0) {
      setProgress(props.initialValue || 0);
    }
  }, [props.initialValue]);
  React__default['default'].useEffect(() => {
    if (props.onChange) {
      props.onChange(progress);
    }
  }, [progress]);
  const _props = Object.assign({
    disabled: false,
    max: 100,
    min: 0,
    steps: 10,
    activeColor: "#2ba9e1",
    bgColor: "#eeeeee",
    knobSize: 10
  }, props);
  const circlePos = Math.round(progress / _props.max * 100);
  return /* @__PURE__ */ React__default['default'].createElement(React__default['default'].Fragment, null, /* @__PURE__ */ React__default['default'].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: [
        `#${id}::-ms-fill-lower {background-color: ${_props.activeColor};}`,
        `#${id}::-ms-fill-upper { background-color: ${_props.bgColor}; }`,
        `#${id}::-moz-range-track { background-color: ${_props.bgColor}; }`,
        `#${id}::-moz-range-progress { background-color: ${_props.activeColor}; }`,
        `#${id}::-moz-range-thumb { top: 0;width: ${_props.knobSize}px;height: ${_props.knobSize}px;cursor: ew-resize;position: relative;border-radius: 100%;background: ${_props.activeColor};border:none;}`,
        "@media screen and (-webkit-min-device-pixel-ratio: 0) {",
        `#${id} {`,
        `height: 4px;border-radius: 2px;-webkit-appearance: none;background-color: ${_props.bgColor};}`,
        `#${id}::-webkit-slider-thumb {`,
        `top: 0;width: ${_props.knobSize}px;height: ${_props.knobSize}px;cursor: ew-resize;position: relative;border-radius: 100%;background: ${_props.activeColor};
              -webkit-appearance: none;}}`
      ].join("")
    }
  }), /* @__PURE__ */ React__default['default'].createElement("input", {
    id,
    type: "range",
    min: _props.min,
    max: _props.max,
    ref: rangeSliderRef,
    value: progress,
    onChange: changeHandler,
    disabled: _props.disabled,
    step: _props.max / _props.steps,
    style: {
      backgroundImage: `linear-gradient(-90deg, ${_props.activeColor} 0%, ${_props.activeColor} ${circlePos}%, ${_props.bgColor} ${circlePos}%)`
    }
  }));
});

module.exports = RangeSlider;
//# sourceMappingURL=index.js.map
