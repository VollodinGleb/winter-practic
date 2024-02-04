import Card from '../components/cards/Card';
import Header from '../components/header/Header'
import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import Heading from '../components/section/Heading';
import Section from '../components/section/Section';
import '../style/home.css'
import pointer1 from '../svg/cards/work/pointer1.svg'
import clients from '../svg/cards/features/clients.svg'
import Footer from '../components/footer/Footer';

export default function Home() {
    return (
        <>
            <Header>
                <FullScreenHeader />
            </Header>

            <main id="content">
                <Section id="How-work">
                    <Heading className={"work-heading"}>
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quos totam ducimus.</p>
                        <a href="">Get into with us</a>
                    </Heading>
                    
                    <WrapContainer>
                        <div className="work-cards">
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                        </div>
                    </WrapContainer>
                </Section>

                <Section id="Features">
                    <Heading className={"features-heading"}>
                        <h4>Features</h4>
                        <h2>Design that solves problems, one product at a time</h2>
                    </Heading>

                    <WrapContainer>
                        <div className="feature-cards">
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                        </div>
                    </WrapContainer>
                </Section>

                <Section id="Our-projects">
                    <Heading className={"projects-heading"}>
                        <h2>View our projects</h2>
                        <a href="">View More<span id="right-arrow">&#8594;</span></a>
                    </Heading>

                    <WrapContainer>
                        {/* Create container BLOCK component */}
                    </WrapContainer>
                </Section>

                <Section id="Our-blog">
                    <Heading className={"blog-heading"}>
                        <h2>Our blog</h2>
                    </Heading>

                    <WrapContainer>
                        {/* Create blog CARD component */}
                    </WrapContainer>
                </Section>
            </main>

            <Footer>
                
            </Footer>
        </>
    );
}