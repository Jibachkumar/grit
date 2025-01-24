import { useMemo, memo, useId } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioButtonGroup = memo(({ label, options = [], ...props }) => {
  const id = useId();
  return useMemo(
    () => (
      <>
        <FormControl>
          {label && (
            <FormLabel id={"demo-radio-buttons-group-label"}>{label}</FormLabel>
          )}

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={options}
            name="radio-buttons-group"
            {...props}
          >
            {options?.map((option, i) => (
              <FormControlLabel
                id={id}
                key={i}
                value={option}
                control={<Radio />}
                label={option}
              />
              // <FormControlLabel value={options} control={<Radio />} label={options} />
              // <FormControlLabel value={options} control={<Radio />} label={options} />
            ))}
          </RadioGroup>
        </FormControl>
      </>
    ),
    [label, options, id, props]
  );
});

export { RadioButtonGroup };
