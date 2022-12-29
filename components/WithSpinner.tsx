import { StyleSheet } from 'react-native'
import React from 'react'
import LoadingIndicator from './LoadingIndicator'

type SpinnerType = {
    isLoading: boolean,
    children: any,
    props?: any
}

const WithSpinner = (Comp: any) => ({ isLoading, children, ...props }: SpinnerType) => {
    if (isLoading) {
        return (
            <LoadingIndicator />
        );
    } else {
        return <Comp {...props}>{children}</Comp>;
    }
}

export default WithSpinner

const styles = StyleSheet.create({})