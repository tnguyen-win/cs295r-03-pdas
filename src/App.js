import './App.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <section className="bg-secondary-subtle mb-5 p-5">
                <h4 className="mb-0">Personal Digital Assistants</h4>
            </section>
            <section className="d-flex justify-content-center container">
                <div className="card-group">
                    <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon and helps you buy things." />
                    <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by Microsoft. Who knows what it does?" />
                    <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was made by Apple and is being phased out." />
                </div>
            </section>
        </div>
    );
}

export default App;
