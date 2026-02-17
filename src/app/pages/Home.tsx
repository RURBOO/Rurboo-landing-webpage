import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { WhyDifferent } from '../components/WhyDifferent';
import { RideOptions } from '../components/RideOptions';
import { HowItWorks } from '../components/HowItWorks';
import { TrustSafety } from '../components/TrustSafety';
import { CallToAction } from '../components/CallToAction';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <div id="about">
                    <Problem />
                </div>

                <WhyDifferent />
                <div id="rides">
                    <RideOptions />
                </div>
                <div id="how-it-works">
                    <HowItWorks />
                </div>
                <div id="safety">
                    <TrustSafety />
                </div>
                <CallToAction />
                <div id="contact">
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
}
