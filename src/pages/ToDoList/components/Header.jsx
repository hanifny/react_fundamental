export default function Header({title}) {
    return (
        <div style={{background: "white", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.2)",
            "WebkitBoxShadow": "10px 10px 5px 0px rgba(0, 0, 0, 0.2)",
            "MozBoxShadow": "10px 10px 5px 0px rgba(0, 0, 0, 0.2)", padding: "10px"}}>
            <h1>{title}</h1>
        </div>
    )
}