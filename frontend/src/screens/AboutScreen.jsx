const AboutScreen = () => {
    const userinfo = localStorage.getItem("userinfo");
    
    return (
        <>
            <h1>
                about {userinfo}
            </h1>
        </>
    )
}

export default AboutScreen;