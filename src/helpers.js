export function kebabCaseToTitleCase (colorName) {
    const colorWhiteSpace = colorName.replaceAll("-", " ");
    const colorWithCaps = colorWhiteSpace.replace(/\b([a-z])/g, (match)=>match.toUpperCase());

    return colorWithCaps
}
