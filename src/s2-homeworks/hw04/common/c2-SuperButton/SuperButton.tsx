import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = s.button
        // + (disabled
        //         ? s.button
        //         : xType === 'red'
        //             ? s.red
        // + (className ? ' ' + className : '') // задачка на смешивание классов

        // const finalClassName = `
        //     ${s.button}
        //     ${xType === 'default' ? s.default : ''}
        //     ${xType === 'red' ? s.red : disabled ? s.disabled : ''}
        //     ${xType === 'secondary' ? s.secondary : ''}
        //     ${disabled ? s.disabled : ''}
        //     ${className ? className : ''}
        // `

    let finalClassName = `${s.button}`;

    if (xType === 'red') {
        finalClassName += ` ${s.red}`;
    }

    if (xType === 'secondary') {
        finalClassName += ` ${s.secondary}`;
    }

    // if (xType === 'default') {
    //     finalClassName += ` ${s.default}`;
    // }

    if (disabled) {
        finalClassName += ` ${s.disabled}`;
    }

    if (className) {
        finalClassName += ` ${s.default}`;
    }

    finalClassName = finalClassName.trim();


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
