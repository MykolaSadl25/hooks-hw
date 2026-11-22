function Section({text,children}) {
    return(
        <section>
            <h1>{text}</h1>
            {children}
        </section>
    )
}

export default Section