import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';


const CustomButtonRoot = styled('button')`
    width:258px;
    height:56px;
    box-shadow: none;
    text-transform: none;
    font-size: 16px;
    color: #ffffff;
    border: 1px solid;
    border-radius: 10px;
    line-height: 1.5;
    background-color: #000000;
    border-color: #000000;
    font-family:PingFang SC;
    &:hover {
        background-color: #171717;
        border-color: #171717;
        box-shadow: none;
    }
    &:active{
        box-shadow: none;
        background-color: #000000;
        border-color: #0000000;
    }
    &:focus {
        box-shadow: 0 0 0 0 #000000;
    }
`

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
        ...props,
        ref,
        component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };

    return (
        <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
            {children}
        </CustomButtonRoot>
    );
});

CustomButton.propTypes = {
    children: PropTypes.node,
};

export default function Select() {

    return (

                <Stack >
                    <stack  spacing={2} direction="row">
                        <CustomButton >
                            Add to Cart
                        </CustomButton>
                    </stack>
                </Stack>

    );
}