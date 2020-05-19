import React from 'react';

import classes from './input';

// This class uses the Factory design pattern
const input = (props) => {

    let inputElement = null;
    const inputElement = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }

    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                                className={inputElement.join(' ')} 
                                {...props.elementConfig} value={props.value}
                                onChange={props.changed}
                            />
            break;
        case ('textarea'):
            inputElement = <textarea 
                                className={inputElement.join(' ')} 
                                {...props.elementConfig} value={props.value}
                                onChange={props.changed}
                            />
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputElement.join(' ')} 
                    value={props.value}
                    onChange={props.changed}
                     >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            { option.displayValue }
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props.elementConfig} value={props.value} />
    }
    return (
        <div className={classes.input}>
            <label className={classes.label}>{ props.label }</label>
            { inputElement }
            { validationError }
        </div>
    );
};


export default input;