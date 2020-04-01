const validQrCodes = ["validQrCode1", "validQrCode2", "validQrCode3", "validQrCode4", "validQrCode5", "validQrCode6", "validQrCode7", "validQrCode8", "validQrCode9"];

export const checkIfQCodeIsValid = (compareString: string) => {
    return validQrCodes.includes(compareString)
}