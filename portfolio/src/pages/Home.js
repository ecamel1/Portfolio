import '../styles/Home.css';
import pdf from './EmmaCamelo_Resume_2022 - Copy.pdf';

const Home = () => {
    return ( 
        <div className="home">
            <h2>Hello, I'm Emma!</h2>
            <p>This page is under construction</p>

            <iframe title='placeholder' src={pdf}></iframe>
        </div>
    );
}
 
export default Home;