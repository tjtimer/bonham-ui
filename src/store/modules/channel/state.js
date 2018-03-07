export default function() {
    return {
        namespaced: true,
        channels: {},
        idsActive: [],
        idsClosed: [],
        isRunning: false,
        isClosing: false
    }
}