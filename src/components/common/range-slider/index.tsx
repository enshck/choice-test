import style from './style.module.css';

type RangeSliderProps = {
  value: number;
  handleChange: (value: string) => void;
  min?: number;
  max?: number;
};

export const RangeSlider = ({
  max,
  min,
  value,
  handleChange,
}: RangeSliderProps) => {
  return (
    <div className={style.root}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {min && max && (
        <div className={style.valuesContainer}>
          <p>{min}</p>
          <p>{max}</p>
        </div>
      )}
    </div>
  );
};
