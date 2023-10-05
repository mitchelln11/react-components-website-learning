// Figure out why it's not going to the Error Page if the id doesn't exist, like id: 4
export default function TagList({productLabels}) {
    return (
        productLabels.map((product, index) => {
            return <li key={index}>{product}</li>
        })
    )
}