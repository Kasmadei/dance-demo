import { AcceptedQrCodes, SET_QR_CODE } from './../type';
import { Dispatch } from "redux";

 export const setQrCode = (qrCode: AcceptedQrCodes) => {
     return async (dispatch: Dispatch) => {
         try {
            dispatch({
                type: SET_QR_CODE,
                payload: qrCode
            })
         } catch (error) {
            alert(`setQrCode fail. ${error.message}`)
         }  
     }
 }