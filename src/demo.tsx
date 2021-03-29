import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from '.';

function RangeSliderDemo() {
  const [state, setState] = React.useState({
    initialValue: 50,
    max: 100,
    min: 0,
    steps: 10,
    knobSize: 20,
    activeColor: '#2ba9e1',
    bgColor: '#eeeeee',
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);

    setState({
      initialValue: Number(data.get('value')),
      knobSize: Number(data.get('knob-size')),
      max: Number(data.get('max')),
      min: Number(data.get('min')),
      steps: Number(data.get('steps')),
      activeColor: String(data.get('active-color')),
      bgColor: String(data.get('bg-color')),
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <span>Value :</span>
          <input type="number" name="value" defaultValue={state.initialValue} />
        </label>

        <label>
          <span>Knob Size :</span>
          <input type="number" name="knob-size" defaultValue={state.knobSize} />
        </label>

        <label>
          <span>Max Value :</span>
          <input type="number" name="max" defaultValue={state.max} />
        </label>

        <label>
          <span>Min Value :</span>
          <input type="number" name="min" defaultValue={state.min} />
        </label>

        <label>
          <span>Steps Count :</span>
          <input type="number" name="steps" defaultValue={state.steps} />
        </label>

        <label>
          <span>Circle Color :</span>
          <input
            type="color"
            name="active-color"
            defaultValue={state.activeColor}
          />
        </label>

        <label>
          <span>Slider Color :</span>
          <input type="color" name="bg-color" defaultValue={state.bgColor} />
        </label>

        <button type="submit">RENDER</button>
      </form>

      <RangeSlider id="demo-slider" {...state} />
    </>
  );
}

ReactDOM.render(<RangeSliderDemo />, document.getElementById('root'));
