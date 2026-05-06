function ProfileCard(props) {
    return (
        <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px", margin: "10px", border: "1px solid purple", width: "300px" }}>
            <h2>{props.name}</h2>
            <p><strong>Job:</strong> {props.job}</p>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>City:</strong> {props.city}</p>
        </div>
    )
}

export default ProfileCard