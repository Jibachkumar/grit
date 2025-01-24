import React, { useMemo, memo, useId } from "react";

// - Build a library of form components (text, select, radio, etc.)
// - Implement form validation using Zod or similar
// - Add preview mode for testing the form
// - Use React.memo and useMemo for optimization
// - Include unit tests for form logic
// - Generate form JSON schema

const InputField = memo(
  ({ label, type = "text", className = "", ...props }) => {
    const id = useId();
    return useMemo(
      () => (
        <div>
          {label && (
            <label htmlFor={id} className={`${className}`}>
              {label}
            </label>
          )}
          <input type={type} className={`${className}`} id={id} {...props} />
        </div>
      ),
      [label, type, className, props, id]
    );
  }
);

const SelectField = memo(({ label, options, className = "", ...props }) => {
  const id = useId();
  return useMemo(
    () => (
      <div>
        {label && (
          <label htmlFor={id} className={`${className}`}>
            {label}
          </label>
        )}

        <select className={`${className}`} {...props}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    ),
    [label, options, id, props, className]
  );
});

// const RadioGroup = memo(
//   ({ label, options, type = "", className = "", ...props }) => {
//     const id = useId();
//     return useMemo(
//       () => (
//         <div>
//           {label && (
//             <label htmlFor={id} className={`${className}`}>
//               {label}
//             </label>
//           )}

//           {options.map((option, i) => (
//             <div>
//               <input value={option} id={i} type={type} {...props} />
//             </div>
//           ))}
//         </div>
//       ),
//       [label, options, className, props, id, type]
//     );
//   }
// );

export { InputField, SelectField };
