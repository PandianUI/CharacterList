import React from "react";


const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function ProductCategoryRow(category) {
    return (
        <tr colspan = "2">
            <th>{category}</th>
        </tr>
    )
}

function ProductRow(product) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}


function Inputsearch() {


}

export default Inputsearch