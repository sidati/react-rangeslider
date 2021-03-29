import React from 'react';

const RangeSlider = React.forwardRef(
  (
    props: {
      id: string;
      disabled?: boolean;
      initialValue?: number;
      max?: number;
      min?: number;
      steps?: number;
      activeColor?: string;
      bgColor?: string;
      knobSize?: number;
      onChange?: Function;
    },
    rangeSliderRef: React.ForwardedRef<HTMLInputElement>
  ) => {
    const id = `range-slider-${props.id}`;

    const [progress, setProgress] = React.useState(props.initialValue);

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
      ev.preventDefault();
      const { value } = ev.target;
      setProgress(Number(value));
    };

    React.useEffect(() => {
      if (typeof progress === undefined) {
        setProgress(props.initialValue || 0);
      }
    }, [props.initialValue]);

    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(progress);
      }
    }, [progress]);

    // @ts-ignore

    const _props: {
      disabled: boolean;
      max: number;
      min: number;
      steps: number;
      activeColor: string;
      bgColor: string;
      knobSize: number;
    } = Object.assign(
      {
        disabled: false,
        max: 100,
        min: 0,
        steps: 10,
        activeColor: '#2ba9e1',
        bgColor: '#eeeeee',
        knobSize: 10,
      },
      props
    );

    // @ts-ignore
    const circlePos = Math.round((progress / _props.max) * 100);

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `#${id}::-ms-fill-lower {background-color: ${_props.activeColor};}`,
              `#${id}::-ms-fill-upper { background-color: ${_props.bgColor}; }`,
              `#${id}::-moz-range-track { background-color: ${_props.bgColor}; }`,
              `#${id}::-moz-range-progress { background-color: ${_props.activeColor}; }`,
              `#${id}::-moz-range-thumb { top: 0;width: ${_props.knobSize}px;height: ${_props.knobSize}px;cursor: ew-resize;position: relative;border-radius: 100%;background: ${_props.activeColor};border:none;}`,
              '@media screen and (-webkit-min-device-pixel-ratio: 0) {',
              `#${id} {`,
              `height: 4px;border-radius: 2px;-webkit-appearance: none;background-color: ${_props.bgColor};}`,
              `#${id}::-webkit-slider-thumb {`,
              `top: 0;width: ${_props.knobSize}px;height: ${_props.knobSize}px;cursor: ew-resize;position: relative;border-radius: 100%;background: ${_props.activeColor};
              -webkit-appearance: none;}}`,
            ].join(''),
          }}
        />

        <input
          id={id}
          type="range"
          min={_props.min}
          max={_props.max}
          ref={rangeSliderRef}
          value={progress}
          onChange={changeHandler}
          disabled={_props.disabled}
          step={_props.max / _props.steps}
          style={{
            backgroundImage: `linear-gradient(-90deg, ${_props.activeColor} 0%, ${_props.activeColor} ${circlePos}%, ${_props.bgColor} ${circlePos}%)`,
          }}
        />
      </>
    );
  }
);

export default RangeSlider;
