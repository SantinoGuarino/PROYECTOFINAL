// Style
import './store.scss'

const Stores =()=> {
    return(
        <>
        <div className="stores-conteiner">
            <div className="stores-intro">
                <h2>Our Store</h2>
                <p>Today the store occupies an area of ​​355 square meters on which a large number of boards, longboards, bodyboards, SUP's and a wide range of wetsuits are displayed, undoubtedly the most cutting-edge of our European coasts. With the latest expansion, the surf school is improved with 280 square meters of facilities with changing rooms, hot showers, lockers and a group of specialized monitors.</p>    
            </div>
            <div className="map-conteiner">
                <h3>virtual visit</h3>
                <iframe title="store" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211836.67691864618!2d-118.90767663496092!3d33.94246354851543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8180e63feeed5%3A0x53f9871988732286!2sDrill%20Surf%20%26%20Skate!5e0!3m2!1ses-419!2sar!4v1656377352922!5m2!1ses-419!2sar"   loading="lazy" referrerolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}

export default Stores