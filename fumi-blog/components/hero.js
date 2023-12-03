export default function Hero({ titleOn = false, subtitle, imageOn = false}) {
    return (
        <div>
            {titleOn && <h1>{title}</h1>}
            <p>{subtitle}</p>
            {imageOn && <figure> [image] </figure>}
        </div>
    )
}