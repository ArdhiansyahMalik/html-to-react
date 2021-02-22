import React from 'react'
import Header from 'parts/Header'
import Section from 'elements/Section'
import HeroImage from 'assets/images/hero-image.png'
import FeatureTile01 from 'assets/images/feature-tile-icon-01.svg'
import FeatureTile02 from 'assets/images/feature-tile-icon-02.svg'
import FeatureTile03 from 'assets/images/feature-tile-icon-03.svg'
import Clients from 'parts/Clients'
import Feature from 'parts/Feature'
import Fade from 'react-reveal/Fade'

export default function Homepage() {
	const features = [
		{
			src: FeatureTile01,
			alt: "Feature tile icon 01",
			title: "Join to BWA 01",
			description: "A pseudo-Latin text design, layout, and printing in place of things to emphasise design."
		},
		{
			src: FeatureTile02,
			alt: "Feature tile icon 02",
			title: "Join to BWA 02",
			description: "A pseudo-Latin text design, layout, and printing in place of things to emphasise design."
		},
		{
			src: FeatureTile03,
			alt: "Feature tile icon 03",
			title: "Join to BWA 03",
			description: "A pseudo-Latin text design, layout, and printing in place of things to emphasise design."
		}
	];
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01" isCenteredContent>
                    <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<Fade bottom delay={500}>
									<h1 className="mt-0 mb-16">
										Landing template for startups
									</h1>
								</Fade>
								<div className="container-xs">
								<Fade bottom delay={800}>
									<p className="mt-0 mb-32">
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</Fade>
								</div>
							</div>
							<div className="hero-figure illustration-element-01">
								<Fade bottom delay={1100}>
								<img
									className="has-shadow"
									src={HeroImage}
									alt="Hero"
									width="896"
									height="504"
									/>
								</Fade>
							</div>
						</div>
					</div>
                </Section>
				<Clients></Clients>
				<Section className="features-tiles">
					<div class="container">
						<div class="features-tiles-inner section-inner">
							<div class="tiles-wrap">
								{features.map((feature, index) => (
									<Feature 
										key={index} 
										delayInMS={(index * 500) + 2000} 
										data={feature}
									>
									</Feature>
								))}
							</div>
						</div>
					</div>
				</Section>
            </main>
        </div>
    );
}
