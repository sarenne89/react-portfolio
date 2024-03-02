import React from 'react'
import "../styles/Header.css"

const styles = {
    heroStyle: {
        backgroundImage: "../assets/img/profile.jpg"
    }
}

function Home() {
    return (
        <section styles={styles.heroStyle} className="hero-banner d-flex" id="hero">
            <div className="row text-end align-items-end d-flex">
                <div className="col-12">
                    <h2 className="text-bg-dark p-2">//Learning something new everyday</h2>
                </div>
            </div>
        </section>
    )
}

export default Home