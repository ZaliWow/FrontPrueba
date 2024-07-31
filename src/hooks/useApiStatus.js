import { useContext } from "react";
import { ApiStatusContext } from "../context/ApiStatusContext";

export function useApiStatus() {
    const {status, setStatus} = useContext(ApiStatusContext)

    const handleApiStatus = (status) => {
        setStatus(status)
    }

    return {status, setStatus, handleApiStatus}
}