import React from 'react'
import Header from 'parts/Header'
import Section from 'elements/Section'
import HeroImage from 'assets/images/hero-image.png'

export default function Homepage() {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01">
                    <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<h1 className="mt-0 mb-16">
									Landing template for startups
								</h1>
								<div className="container-xs">
									<p className="mt-0 mb-32">
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
								</div>
							</div>
							<div className="hero-figure illustration-element-01">
								<img
									className="has-shadow"
									src={HeroImage}
									width="896"
									height="504"
								/>
							</div>
						</div>
					</div>
                </Section>
            </main>
        </div>
    );
}
