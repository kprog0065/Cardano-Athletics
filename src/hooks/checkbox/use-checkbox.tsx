import { ChangeEvent, useReducer } from 'react';
import { CheckBoxValidatorFn } from '../../shared/utils/validation/models/ValidatorFn';
import {
    CheckboxActionType,
    CHECKBOX_ACTION_CHANGE,
    CHECKBOX_ACTION_CLEAR,
} from './models/CheckboxAction';
import { CheckboxState } from './models/CheckboxState.interface';

export interface Action<T> {
    type: T;
    value?: boolean;
}
const initialCheckboxState: CheckboxState = {
    checked: false,
    hasBeenTouched: false,
};

const checkboxReducer = (state: CheckboxState, action: Action<CheckboxActionType>) => {
    const { type, value = false } = action;

    switch (type) {
        case CHECKBOX_ACTION_CHANGE:
            return { checked: value, hasBeenTouched: state.hasBeenTouched };
        case CHECKBOX_ACTION_CLEAR:
            return { checked: false, hasBeenTouched: false };

        default:
            return { ...state };
    }
};

const useCheckbox = (CheckBoxValidatorFn?: CheckBoxValidatorFn) => {
    const [{ checked, hasBeenTouched }, dispatch] = useReducer<React.Reducer<CheckboxState, Action<CheckboxActionType>>>(
        checkboxReducer,
        initialCheckboxState
    );

    let shouldDisplayError = false;

    if (CheckBoxValidatorFn) {
        const isValid = CheckBoxValidatorFn(checked);
        shouldDisplayError = !isValid && hasBeenTouched;
    }

    const checkboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: CHECKBOX_ACTION_CHANGE, value: e.target.checked });
    };

    const clearHandler = () => {
        dispatch({ type: CHECKBOX_ACTION_CLEAR });
    };

    return {
        checked,
        shouldDisplayError,
        checkboxChangeHandler,
        clearHandler,
    };
};

export default useCheckbox;
