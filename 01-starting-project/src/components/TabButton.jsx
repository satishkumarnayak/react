
export default function TabButton({children, onSelect, isSelected}){

    console.log("TabButton Component Rendering");
    return (<li>
                <button className={isSelected === true ? 'active' : undefined} onClick={onSelect}>{children}</button>
            </li>
    );
    
}