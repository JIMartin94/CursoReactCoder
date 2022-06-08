import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) =>{

    const onAdd = () => {}

    return(
        <main>
           <h1>{greeting}</h1>
           <ItemCount stock={10} initial={1} onAdd={()=>{}}/>
        </main>
    );
}
export default ItemListContainer