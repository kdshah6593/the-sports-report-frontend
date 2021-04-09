export const urlDomain = () => {
    if (process.env.NODE_ENV !== 'production') {
        return "http://localhost:3001"
    } else if (process.env.NODE_ENV === 'production') {
        return "https://the-sports-report-backend.herokuapp.com"
    }
}