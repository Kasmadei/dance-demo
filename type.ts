export interface ReduxAction {
    type: string,
    payload?: any
}

export interface ReduxState {
    acceptedQrCodes: AcceptedQrCodes,

}

export interface AcceptedQrCodes {
    [decodedString: string]: string
}

export const SET_QR_CODE = "SET_QR_CODE" 