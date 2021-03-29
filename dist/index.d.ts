import React from 'react';

declare const RangeSlider: React.ForwardRefExoticComponent<{
    id: string;
    disabled?: boolean | undefined;
    initialValue?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
    steps?: number | undefined;
    activeColor?: string | undefined;
    bgColor?: string | undefined;
    knobSize?: number | undefined;
    onChange?: Function | undefined;
} & React.RefAttributes<HTMLInputElement>>;

export default RangeSlider;
