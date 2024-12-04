

export default function List(props) {
    return (
        <>
            <ul>
               
                    <li key={props.id}>
                        
                        {props.id} ====  {props.name} - {props.description}
                    </li>
              
            </ul>
        </>
    );
}