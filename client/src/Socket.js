import { io } from "socket.io-client";

export const initSocket = async () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";  // Default to localhost
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(backendURL, options);
};
