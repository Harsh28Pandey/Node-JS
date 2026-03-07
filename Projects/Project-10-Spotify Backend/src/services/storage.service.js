const { ImageKit } = require("@imagekit/nodejs")

const ImageKitClient = new ImageKit({
    privateKey: "private_q+ZGmHf7R8sRh0c8k9dnJq0Qn+c="
})

const uploadFile = async (file) => {
    const result = await ImageKitClient.files.upload({
        file: file,
        fileName: "music_" + Date.now(),
        folder: "music"
    })
    return result
}

module.exports = { uploadFile }