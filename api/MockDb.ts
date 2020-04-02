const validQrCodes = ["validQrCode1", "validQrCode2", "validQrCode3"]

export const checkIfQrCodeIsValid = (qr: string) => {
    return validQrCodes.includes(qr)
}