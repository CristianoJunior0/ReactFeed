export function Post(props){
    return (
        <div>
            <p><b>{props.author}</b></p>
            <p>{props.content}</p>
        </div>
        )
}