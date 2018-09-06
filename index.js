import * as React from "react";


export default function(...compositions){
    return function(WrappedComponent){
        return compositions.reduce((compose, composition)=>{
            return composition(compose)
        },WrappedComponent)
    }
    
}