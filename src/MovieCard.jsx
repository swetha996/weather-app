function MovieCard(props) {
    return (
        <div style={{ 
            padding: "15px", 
            backgroundColor: "white", 
            borderRadius: "10px", 
            margin: "10px 0",
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <div>
                <h3 style={{ margin: "0", color: "purple" }}>{props.title}</h3>
                <p style={{ margin: "5px 0", color: "gray" }}>Rating: {props.rating}/10</p>
            </div>
            <button 
                onClick={() => props.onDelete(props.id)}
                style={{ 
                    padding: "8px 16px", 
                    backgroundColor: "red", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "8px", 
                    cursor: "pointer" 
                }}
            >
                Delete
            </button>
        </div>
    )
}

export default MovieCard