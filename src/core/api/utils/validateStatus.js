export const validateStatus = (status) => {
    return (status >= 200 && status < 300) || status === 304;
};
