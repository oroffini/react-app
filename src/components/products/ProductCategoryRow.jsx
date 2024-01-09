/**
 * Ligne de tableau affichant le nom d'une catégorie de produits
 * 
 * @param {string} name
 */

export function ProductCategoryRow ({name}) {
    return <tr>
        <td colSpan="2"><strong>{name}</strong></td>
    </tr>
}