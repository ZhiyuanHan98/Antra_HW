interface IProp<T extends Object> {
    data: Array<T>,
    field: keyof T,
    setter: (value: string) => void
}

export function ComboSelector<T extends Object>({ data, field, setter }: IProp<T>) {
    const dataset: Set<string> = new Set();
    data.forEach(elem => dataset.add(elem[field] as string));
    return (
        <>
            <span>{field.toString()}</span>
            <select name="cars" id="cars" onChange={e => setter(e.target.value)}>
                {[...dataset].map(data => {
                    return (<option key={data} value={data}>{data}</option>)
                })}
            </select>
        </>
    )
}