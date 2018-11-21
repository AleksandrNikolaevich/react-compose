import * as React from "react";


export default function(...compositions: Array<any>){
    return function<T>(WrappedComponent: any): React.ComponentType<T>{
        return compositions.reverse().reduce((compose, composition)=>{
            return composition(compose)
        },WrappedComponent)
    }
    
}