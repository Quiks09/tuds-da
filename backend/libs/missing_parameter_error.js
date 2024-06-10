export class MissingParameterError extends Error{
    constructor(paramName){
        
    super(`Falta el parametro: ${paramName}`);

        this.paramName = paramName;
    }
}