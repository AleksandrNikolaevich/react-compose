import * as React from "react";


export default function(...compositions: Array<any>){
    return function(WrappedComponent: any){
        return compositions.reverse().reduce((compose, composition)=>{
            return composition(compose)
        },WrappedComponent)
    }
    
}