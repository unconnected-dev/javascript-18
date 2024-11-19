'use strict';

if(true){
    // Short circuit || will return the first truthy
    console.log(undefined || `truthy`);
    console.log(undefined || null || `truthy`);
    console.log(undefined || `` || 1);

    // ?? is similar to || but only works with undefined or null
    console.log(undefined ?? null ?? `truthy`);
    console.log(0 ?? `truthy`);
}