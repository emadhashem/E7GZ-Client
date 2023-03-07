export interface IAppoinment {
    title : string,
    id : string,
    msg : string,
    start : Date,
    end : Date,
}

export interface IAppoinmentProps extends IAppoinment {
    hideTitle : boolean
}