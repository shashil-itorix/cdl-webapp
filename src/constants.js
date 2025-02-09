import { toast } from "react-toastify";

export const TYPE_CONSTANTS = {
    GENERAL: "GENERAL",
    RESIDENTIAL: "RESIDENTIAL",
    COMMERCIAL: "COMMERCIAL",
    INDUSTRIAL: "INDUSTRIAL"
}

export function objectDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function throwServerError(mssg){
    return toast.error(mssg)
}

export function throwSuccessMessage(mssg){
    return toast.success(mssg)
}