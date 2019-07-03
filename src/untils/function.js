
export const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementLastRows = data.length - (numColumns * numberOfFullRows);

    while (numberOfElementLastRows !== numColumns && numberOfElementLastRows !== 0) {
        data.push({ key: `blank-${numberOfElementLastRows}`, empty: true })
        numberOfElementLastRows += 1;
    }
    return data;
}