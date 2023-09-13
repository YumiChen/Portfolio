const isProd = process.env.NODE_ENV === 'production'

export default function imageLoader({ src }) {
    return isProd? `https://cdn.jsdelivr.net/gh/YumiChen/portfolio@gh-pages/public/${src}` : src
}