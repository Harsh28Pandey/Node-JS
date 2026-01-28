const { nanoid } = require("nanoid")
const url = require("../models/url")

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body
    if (!body.url) return res.status(400).json({ message: "Url is required" })
    const shortID = nanoid(8)

    await url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.status(201).json({ id: shortID })
}

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await url.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}