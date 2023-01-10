export function GenerateCheckboxList({checkboxValue, index}) {
    return (
        <div className="checkbox-item" key={index}>
            <input type="checkbox" id={checkboxValue} name={checkboxValue} />
            <label for={checkboxValue}>{checkboxValue}</label>
        </div>
    )
}